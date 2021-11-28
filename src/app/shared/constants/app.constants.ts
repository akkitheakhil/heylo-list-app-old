export class AppConstants {

  imgUrls = {
    defaultAvatarUrl: "assets/images/user.png"
  }

  appRoutes = {
    // feature routes
    dashboard: "/app/dashboard",
    category: "/app/category",
    profile: "/app/profile",
    list: "/app/list",

    // Core Routes
    login: "core/login",
    register: "core/register",
    logout: "core/logout",
  }

  appIcons = {
    google: "GOOGLE",
    apple: "APPLE",
    home: "HOME",
    category: "CATEGORY",
    list: "LIST",
    add: "ADD",
    profile: "PROFILE"
  }


  bottomTabs: { name: string; icon: string; isCenter?: boolean; url?: string, hasAction?: boolean }[] = [
    { name: "dashboard", icon: this.appIcons.home, url: this.appRoutes.dashboard },
    { name: "category", icon: this.appIcons.category, url: this.appRoutes.category },
    { name: "quickAdd", icon: this.appIcons.add, isCenter: true, hasAction: true },
    { name: "list", icon: this.appIcons.list, url: this.appRoutes.list },
    { name: "profile", icon: this.appIcons.profile, url: this.appRoutes.profile },
  ]



}
