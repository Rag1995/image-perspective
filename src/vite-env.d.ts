/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />

import 'vue-router'
declare global {
  interface BreadcrumbItem {
    name: RouteRecordName
    title?: string
  }
}
declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    breadcrumb?: BreadcrumbItem[]
  }
}

