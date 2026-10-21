FROM nginx:alpine

# Custom Nginx configuration for VitePress routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy pre-built VitePress static assets
COPY .vitepress/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
