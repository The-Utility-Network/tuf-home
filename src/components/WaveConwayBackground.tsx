'use client';

import { useEffect, useRef, useCallback } from 'react';

// Use strict types for performance in animation loop
interface Cell {
    alive: boolean;
    age: number;
    color: { r: number, g: number, b: number } | null;
}

interface Firework {
    x: number;
    y: number;
    targetY: number;
    speed: number;
    angle: number;
    hue: number;
    brightness: number;
    currentX: number;
    currentY: number;
    velX: number;
    velY: number;
    color: { r: number, g: number, b: number };
}

interface Particle {
    x: number;
    y: number;
    velX: number;
    velY: number;
    alpha: number;
    decay: number;
    color: { r: number, g: number, b: number };
}

// Subsidiary colors for Fireworks
const SUBSIDIARY_COLORS = [
    { r: 245, g: 64, b: 41 },   // Utility Red
    { r: 212, g: 165, b: 116 }, // The Graine Ledger
    { r: 123, g: 104, b: 238 }, // Arthaneeti
    { r: 0, g: 212, b: 170 },   // Requiem Electric
    { r: 76, g: 175, b: 80 },   // LNBS
    { r: 255, g: 112, b: 67 },  // Cornucopia Robotics
    { r: 233, g: 30, b: 99 },   // DigiBazaar
    { r: 60, g: 180, b: 250 },  // Research Blue
];

export default function WaveConwayBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number>(0);
    const gridRef = useRef<Cell[][]>([]);

    // Animation state lists
    const fireworksRef = useRef<Firework[]>([]);
    const particlesRef = useRef<Particle[]>([]);

    const CELL_SIZE = 8; // Smaller cells for denser grid
    const CONWAY_INTERVAL = 100;
    const lastConwayUpdate = useRef<number>(0);

    const initGrid = useCallback((cols: number, rows: number) => {
        const grid: Cell[][] = [];
        for (let y = 0; y < rows; y++) {
            grid[y] = [];
            for (let x = 0; x < cols; x++) {
                grid[y][x] = { alive: false, age: 0, color: null };
            }
        }
        return grid;
    }, []);

    const countNeighbors = (grid: Cell[][], x: number, y: number, cols: number, rows: number): number => {
        let count = 0;
        for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
                if (dx === 0 && dy === 0) continue;
                const nx = (x + dx + cols) % cols;
                const ny = (y + dy + rows) % rows;
                if (grid[ny][nx].alive) count++;
            }
        }
        return count;
    };

    const updateConway = (grid: Cell[][], cols: number, rows: number): Cell[][] => {
        const newGrid: Cell[][] = [];
        for (let y = 0; y < rows; y++) {
            newGrid[y] = [];
            for (let x = 0; x < cols; x++) {
                newGrid[y][x] = { ...grid[y][x] }; // Clone cell
            }
        }

        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
                const cell = grid[y][x];
                const neighbors = countNeighbors(grid, x, y, cols, rows);

                if (cell.alive) {
                    if (neighbors === 2 || neighbors === 3) {
                        newGrid[y][x].age++;
                        // Use existing color
                    } else {
                        newGrid[y][x].alive = false;
                        newGrid[y][x].age = 0;
                        newGrid[y][x].color = null;
                    }
                } else {
                    if (neighbors === 3) {
                        // Reproduce: inherit color from neighbors
                        let r = 0, g = 0, b = 0, count = 0;
                        for (let dy = -1; dy <= 1; dy++) {
                            for (let dx = -1; dx <= 1; dx++) {
                                if (dx === 0 && dy === 0) continue;
                                const nx = (x + dx + cols) % cols;
                                const ny = (y + dy + rows) % rows;
                                if (grid[ny][nx].alive && grid[ny][nx].color) {
                                    const c = grid[ny][nx].color!;
                                    r += c.r;
                                    g += c.g;
                                    b += c.b;
                                    count++;
                                }
                            }
                        }

                        newGrid[y][x].alive = true;
                        newGrid[y][x].age = 0;
                        if (count > 0) {
                            newGrid[y][x].color = {
                                r: Math.round(r / count),
                                g: Math.round(g / count),
                                b: Math.round(b / count)
                            };
                        } else {
                            // Fallback color
                            newGrid[y][x].color = { r: 100, g: 100, b: 255 };
                        }
                    }
                }
            }
        }
        return newGrid;
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            const cols = Math.ceil(canvas.width / CELL_SIZE);
            const rows = Math.ceil(canvas.height / CELL_SIZE);
            gridRef.current = initGrid(cols, rows);
        };

        resize();
        window.addEventListener('resize', resize);

        const animate = (timestamp: number) => {
            if (!ctx || !canvas) return;

            const width = canvas.width;
            const height = canvas.height;
            const cols = Math.ceil(width / CELL_SIZE);
            const rows = Math.ceil(height / CELL_SIZE);

            // Clear with trail effect
            ctx.globalCompositeOperation = 'destination-out';
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.fillRect(0, 0, width, height);
            ctx.globalCompositeOperation = 'source-over';

            // 1. UPDATE & DRAW FIREWORKS
            if (Math.random() < 0.03) { // Spawn chance
                const startX = Math.random() * width;
                const targetY = height * 0.1 + Math.random() * (height * 0.5); // Explode in upper half
                const color = SUBSIDIARY_COLORS[Math.floor(Math.random() * SUBSIDIARY_COLORS.length)];

                fireworksRef.current.push({
                    x: startX,
                    y: height,
                    targetY: targetY,
                    currentX: startX,
                    currentY: height,
                    speed: 2,
                    angle: -Math.PI / 2 + (Math.random() - 0.5) * 0.5, // Slight spread
                    hue: 0,
                    brightness: 0,
                    velX: (Math.random() - 0.5) * 2,
                    velY: - (Math.random() * 3 + 5), // Initial upward velocity
                    color: color
                });
            }

            for (let i = fireworksRef.current.length - 1; i >= 0; i--) {
                const fw = fireworksRef.current[i];

                // Physics
                fw.velY += 0.05; // Gravity
                fw.currentX += fw.velX;
                fw.currentY += fw.velY;

                // Draw
                ctx.beginPath();
                ctx.arc(fw.currentX, fw.currentY, 2, 0, Math.PI * 2);
                ctx.fillStyle = `rgb(${fw.color.r}, ${fw.color.g}, ${fw.color.b})`;
                ctx.fill();

                // Explode condition (reached apex or target)
                if (fw.velY >= 0 || fw.currentY <= fw.targetY) {
                    // Create particles
                    for (let j = 0; j < 50; j++) {
                        const angle = Math.random() * Math.PI * 2;
                        const speed = Math.random() * 4;
                        particlesRef.current.push({
                            x: fw.currentX,
                            y: fw.currentY,
                            velX: Math.cos(angle) * speed,
                            velY: Math.sin(angle) * speed,
                            alpha: 1,
                            decay: Math.random() * 0.015 + 0.005,
                            color: fw.color
                        });
                    }
                    fireworksRef.current.splice(i, 1);
                }
            }

            // 2. UPDATE & DRAW PARTICLES
            for (let i = particlesRef.current.length - 1; i >= 0; i--) {
                const p = particlesRef.current[i];

                p.velX *= 0.95; // Friction
                p.velY *= 0.95;
                p.velY += 0.04; // Gravity

                p.x += p.velX;
                p.y += p.velY;
                p.alpha -= p.decay;

                if (p.alpha <= 0) {
                    particlesRef.current.splice(i, 1);
                    continue;
                }

                // Draw Particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha})`;
                ctx.fill();

                // Seed Conway Grid
                // Chance to seed grid cell at particle location
                if (Math.random() < 0.1) {
                    const gx = Math.floor(p.x / CELL_SIZE);
                    const gy = Math.floor(p.y / CELL_SIZE);

                    if (gx >= 0 && gx < cols && gy >= 0 && gy < rows) {
                        gridRef.current[gy][gx] = {
                            alive: true,
                            age: 0,
                            color: p.color
                        };
                    }
                }
            }

            // 3. UPDATE CONWAY
            if (timestamp - lastConwayUpdate.current > CONWAY_INTERVAL) {
                gridRef.current = updateConway(gridRef.current, cols, rows);
                lastConwayUpdate.current = timestamp;
            }

            // 4. DRAW CONWAY GRID
            // We draw this on top or behind? Let's draw behind particles but on same canvas
            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < cols; x++) {
                    const cell = gridRef.current[y]?.[x];
                    if (!cell?.alive || !cell.color) continue;

                    const px = x * CELL_SIZE;
                    const py = y * CELL_SIZE;

                    // Fade out age
                    const alpha = Math.max(0, 0.6 - (cell.age * 0.02));
                    if (alpha <= 0) continue;

                    ctx.beginPath();
                    ctx.arc(px + CELL_SIZE / 2, py + CELL_SIZE / 2, (CELL_SIZE / 2) - 1, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${cell.color.r}, ${cell.color.g}, ${cell.color.b}, ${alpha})`;
                    ctx.fill();
                }
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationRef.current);
        };
    }, [initGrid]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-5 pointer-events-none"
            style={{ opacity: 0.8 }}
        />
    );
}
