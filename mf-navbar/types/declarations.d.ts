declare module "*.scss" {
    const content: { [className: string]: string };
    export = content;
  }

  /// <reference types="react" />

declare module "UserMenu" {
  const UserMenu: React.ComponentType;

  export default UserMenu;
}

declare module "Search" {
  const Search: React.ComponentType;

  export default Search;
}