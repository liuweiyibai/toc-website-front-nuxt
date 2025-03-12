# 使用轻量的 Node.js Alpine 镜像
FROM node:20-alpine as build-stage

# 设置工作目录
WORKDIR /app

# 启用 corepack 并更新 pnpm 版本
RUN corepack enable && corepack prepare pnpm@latest --activate

# 复制必要的依赖文件
COPY .npmrc package.json pnpm-lock.yaml ./

# 使用缓存机制加速构建，修复签名问题
RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store \
    pnpm install --frozen-lockfile

# 复制源码
COPY . .

# 构建项目
RUN pnpm build

# === 运行阶段 ===
FROM node:20-alpine as production-stage

# 设置工作目录
WORKDIR /app

# 复制构建产物
COPY --from=build-stage /app/.output ./.output

# 设置运行时环境变量（可选）
ENV NODE_ENV=production

# 暴露端口
EXPOSE 3000

# 启动 SSR 服务
CMD ["node", ".output/server/index.mjs"]
