export function getMedallionUrl(subsidiaryName: string): string {
    const baseUrl = '/Medallions';

    // Normalize name to handle potential variations
    const name = subsidiaryName.toLowerCase().trim();

    const mapping: Record<string, string> = {
        'ledger1': 'Ledger1_opt.png',
        'requiem electric': 'RE_opt.png',
        'the graine ledger': 'TGL_opt.png',
        'vulcan forge': 'VulcanForge2_opt.png',
        'osiris protocol': 'OP_opt.png',
        'cornucopia robotics': 'CornucopiaRobotics_opt.png',
        'digibazaar': 'DigiBazaarMedallion_opt.png',
        'elysium athletica': 'Elysium_opt.png',
        'arthaneeti': 'AR_opt.png',
        'loch ness botanical society': 'TLN_opt.png',
        'the utility foundation': 'Symbol_opt.png',
        'mkvli': 'MKVLI_opt.png',
        'industrial evolution': 'IE_opt.png',
        'the refrain': 'the_refrain_medallion_opt.png',
        'creative revolution': 'creative_revolution_medallion_opt.png'
    };

    const filename = mapping[name] || 'Symbol_opt.png';
    return `${baseUrl}/${filename}`;
}
