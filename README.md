# 技术亮点：

### 基于webpack性能优化自己搭建了一套脚手架，区分开发环境和生产环境。

### 手动实现loader、plugin

### 手动实现迷你bundler（入口文件分析，依赖图谱，代码生成）

## 生产环境打包

```
npm run build
```

## 开发环境打包

```
npm run dev
```

## loader

```
cd make-loader
npm run build
```

## plugin

```
cd make-plugin
npm run build
```

## bundler

```
cd bundler
node bundler.js
```

小总结 - webpack 性能优化

1. 跟上技术的迭代（Node,Npm,Yarn）
2. 在尽可能少的模块上应用 Loader
3. Plugin 尽可能精简并确保可靠
4. resolve 参数合理配置
5. 使用 DllPlugin 提高打包速度
6. 控制包文件大小
7. thread-loader,parallel-webpack,happypack 多进程打包
8. 合理使用 sourceMap
9. 结合 stats 分析打包结果
10. 开发环境内存编译
11. 开发环境无用插件剔除

