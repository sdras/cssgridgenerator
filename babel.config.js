module.exports = api => {
    const isTest = api.env('test');
    
    if (isTest) {
        return {
            presets: [
                [
                    '@babel/preset-env',
                    {
                        targets: {
                            node: 'current',
                        },
                    },
                ],
            ],
        };
    }
    
    return {
        presets: [
            '@vue/app'
        ]
    }
};
