const config = {
    app_name: 'Cool Rarity',
    app_description: 'Cool Rarity is an open source package for easy rarity score calculation with ERC721 NFT metadata collection.',
    collection_file_name: 'apesmeta.json',
    collection_contract_address: '0x4dB15d4E3fD60EFb41EF9f593f959aF9172D36b9',
    collection_name: '10,000 piece Enhanced Apes Collection',
    collection_description: '10,000 piece Enhanced Apes Collection',
    collection_id_from: 1,
    ignore_traits: ['date'], 
    sqlite_file_name: 'database.sqlite',
    //ga: 'G-BW69Z04YTP',
    main_og_image: 'https://ipfs.io/ipfs/QmdW2wgbv84y8bvXw96vU8KudETjL75qJsEPx2BRFy5NnX/9958.png',
    item_path_name: 'bull',
    page_item_num: 60,
    content_image_is_video: false,
    content_image_frame: 'circle', // circle, rectangle
    use_wallet: false
};

module.exports = config;