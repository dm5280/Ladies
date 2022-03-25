const config = {
    app_name: 'Cool Rarity',
    app_description: 'Cool Rarity is an open source package for easy rarity score calculation with ERC721 NFT metadata collection.',
    collection_file_name: 'ladybulls.json',
    collection_contract_address: '0xcb8695bec262679b942446cd94dfF849c76753c9',
    collection_name: '10000 ENFT Bull Club Lady Bulls',
    collection_description: '10000 ENFT Bull Club Lady Bulls',
    collection_id_from: 1,
    ignore_traits: ['date'], 
    sqlite_file_name: 'database.sqlite',
    //ga: 'G-BW69Z04YTP',
    main_og_image: '/images/Bull.png',
    item_path_name: 'bull',
    page_item_num: 60,
    content_image_is_video: false,
    content_image_frame: 'circle', // circle, rectangle
    use_wallet: false
};

module.exports = config;