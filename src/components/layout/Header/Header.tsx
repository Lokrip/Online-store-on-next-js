import { Container } from "@/components/tag/Container/Container";
import { useAttachSubComponents } from "@/hooks/hooks";
import { CLName } from "@/types/react/type.type";
import { FC, PropsWithChildren } from "react";
import navbarData from '../../../data/header-navbar.json'
import { Navbar } from "../Navbar/NabarMain";
import { NavbarDropDownItems, NavbarItem } from "../Navbar/Navbar";
import { HeaderContainer, HeaderMain } from "@/components/module/Header/Header";


export interface HeaderContainerType extends CLName, PropsWithChildren {}

const Header: FC = () => {
    return (
        <HeaderMain>
            <HeaderContainer className="mx-auto flex justify-between items-center py-4">
                {/* Left section: Logo */}
                <Navbar>
                    <Navbar.Header>
                        <a href="index.html" className="flex items-center">
                            <div>
                            <img src="assets/images/template-white-logo.png" alt="Logo" className="h-14 w-auto mr-4" />
                            </div>
                        </a>
                    </Navbar.Header>

                    <Navbar.HamburgerMenu>
                        {/* Hamburger menu (for mobile) */}
                        <div className="flex lg:hidden">
                            <button id="hamburger" className="text-white focus:outline-none">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                            </button>
                        </div>
                    </Navbar.HamburgerMenu>

                    <Navbar.Content>
                        {/* Center section: Menu */}
                        <nav className="hidden lg:flex md:flex-grow justify-center">
                            <ul className="flex justify-center space-x-4 text-white">
                                {navbarData.map((item, index) => (
                                    <NavbarItem 
                                        key={item.label} 
                                        {...item} 
                                    >
                                        {item.items?.map(subItem => (
                                            <NavbarDropDownItems 
                                                key={subItem.label}
                                                {...subItem}
                                            />
                                        ))}
                                    </NavbarItem>
                                ))}
                            </ul>
                        </nav>
                    </Navbar.Content>


                    <Navbar.Footer>
                        {/* Right section: Buttons (for desktop) */}
                        <div className="hidden lg:flex items-center space-x-4 relative">
                            <a href="register.html" className="bg-primary border border-primary hover:bg-transparent text-white hover:text-primary font-semibold px-4 py-2 rounded-full inline-block">Register</a>
                            <a href="register.html" className="bg-primary border border-primary hover:bg-transparent text-white hover:text-primary font-semibold px-4 py-2 rounded-full inline-block">Login</a>

                            <div className="relative group cart-wrapper">
                                <a href="/cart.html" id="cart-icon">
                                    <img src="assets/images/cart-shopping.svg" alt="Cart" className="h-6 w-6 group-hover:scale-120" />
                                </a>
                                {/* Cart dropdown */}
                                <div id="cart-dropdown" className="absolute right-0 mt-1 w-80 bg-white shadow-lg p-4 rounded hidden">
                                    <div className="space-y-4">
                                    {/* product item */}
                                    <div className="flex items-center justify-between pb-4 border-b border-gray-line">
                                        <div className="flex items-center">
                                        <img src="/assets/images/single-product/1.jpg" alt="Product" className="h-12 w-12 object-cover rounded mr-2" />
                                        <div>
                                            <p className="font-semibold">Summer black dress</p>
                                            <p className="text-sm">Quantity: 1</p>
                                        </div>
                                        </div>
                                        <p className="font-semibold">$25.00</p>
                                    </div>
                                    {/* product item */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                        <img src="/assets/images/single-product/2.jpg" alt="Product" className="h-12 w-12 object-cover rounded mr-2" />
                                        <div>
                                            <p className="font-semibold">Black suit</p>
                                            <p className="text-sm">Quantity: 1</p>
                                        </div>
                                        </div>
                                        <p className="font-semibold">$125.00</p>
                                    </div>
                                    </div>
                                    <a href="/cart.html" className="block text-center mt-4 border border-primary bg-primary hover:bg-transparent text-white hover:text-primary py-2 rounded-full font-semibold">Go to Cart</a>
                                </div>
                            </div>

                            <a id="search-icon" className="text-white hover:text-secondary group">
                            <img src="assets/images/search-icon.svg" alt="Search" className="h-6 w-6 transition-transform transform group-hover:scale-120" />
                            </a>

                            {/* Search field */}
                            <div id="search-field" className="hidden absolute top-full right-0 mt-2 w-full bg-white shadow-lg p-2 rounded">
                                <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Search for products..." />
                            </div>
                        </div>
                    </Navbar.Footer>
                </Navbar>
            </HeaderContainer>
        </HeaderMain>
    )
}


export default Header;