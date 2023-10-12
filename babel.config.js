module.exports={
  //智能预设：能够编译ES6的语法
  presets: [
    [
      '@babel/preset-env',
      {
      useBuiltIns:'usage', //按需加载自动引入
      corejs:3,
    },
  ]
  ],
};