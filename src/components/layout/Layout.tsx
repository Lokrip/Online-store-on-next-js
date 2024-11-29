import { FC } from "react";
import type { PropsWithChildren } from "react";
import { Main } from "./Main/Main";
import Header from "./Header/Header";

export const LayoutApp: FC<PropsWithChildren> = ({children}) => {
    return (
        <Main>
            <Main.Header>
                <Header/>
            </Main.Header>

            <Main.Navbar>
            <nav id="mobile-menu-placeholder" className="mobile-menu hidden flex flex-col items-center space-y-8 lg:hidden">
              {/* Навигационное меню */}
              <ul className="w-full">
                <li><a href="index.html" className="hover:text-secondary font-bold block py-2">Home</a></li>
                <li className="relative group">
                  <a className="hover:text-secondary font-bold block py-2 flex justify-center items-center cursor-pointer">
                    <span>Men</span>
                  </a>
                  <ul className="mobile-dropdown-menu space-y-2">
                    <li><a href="shop.html" className="hover:text-secondary font-bold block pt-2 pb-3">Shop Men</a></li>
                    <li><a href="single-product-page.html" className="hover:text-secondary font-bold block py-2">Men item 1</a></li>
                  </ul>
                </li>
                {/* Women Dropdown */}
                <li className="relative group">
                  <a className="hover:text-secondary font-bold block py-2 flex justify-center items-center cursor-pointer">
                    <span>Women</span>
                  </a>
                  <ul className="mobile-dropdown-menu space-y-2">
                    <li><a href="shop.html" className="hover:text-secondary font-bold block py-2">Shop Women</a></li>
                    <li><a href="single-product-page.html" className="hover:text-secondary font-bold block py-2">Women item 1</a></li>
                  </ul>
                </li>
                <li><a href="shop.html" className="hover:text-secondary font-bold block py-2">Shop</a></li>
              </ul>
              <div className="flex flex-col mt-6 space-y-2 items-center">
                <a href="register.html" className="bg-primary hover:bg-transparent text-white hover:text-primary border border-primary font-semibold px-4 py-2 rounded-full">Register</a>
              </div>
              <div className="top-full right-0 mt-2 w-full bg-white shadow-lg p-2 rounded">
                <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Search for products..." />
              </div>
            </nav>
            </Main.Navbar>

            <Main.Content>
                {children}
            </Main.Content>

            <Main.Footer>
                footer
            </Main.Footer>
        </Main>
    )
}

const Layout: FC<PropsWithChildren> = ({children}) => {
    return (
        <LayoutApp>
            {children}
        </LayoutApp>
    )
}

export default Layout;