import { Container } from "@/components/tag/Container/Container"
import { FC, useEffect } from "react"
import ProductInfoComponents from "./ProductInfoComponents"

export const BreadcrumbsProduct: FC = () => (
    <Container className="mx-auto px-4">
        <ol className="list-reset flex">
            <li>
                <a href="index.html" className="font-semibold hover:text-primary">Home</a>
            </li>
            <li><span className="mx-2">&gt;</span></li>
            <li>
                <a href="shop.html" className="font-semibold hover:text-primary">Shop</a>
            </li>
            <li><span className="mx-2">&gt;</span></li>
            <li>
                <a href="category.html" className="font-semibold hover:text-primary">T-shirts</a>
            </li>
            <li><span className="mx-2">&gt;</span></li>
            <li>Preppy T-shirt</li>
        </ol>
    </Container>
)

export const ProductInfo: FC<{id: string}> = ({id}) => (
    <ProductInfoComponents id={id} />
)

export const ProductDetail: FC = () => {
    return (
        <>

        <section>
            <div className="container mx-auto">
                <div className="py-12">
                    <div className="mt-10">
                        <div className="flex space-x-4" role="tablist">
                            <button
                                id="description-tab"
                                role="tab"
                                aria-controls="description-content"
                                aria-selected="true"
                                className="tab active"
                            >
                                Description
                            </button>
                            <button
                                id="additional-info-tab"
                                role="tab"
                                aria-controls="additional-info-content"
                                aria-selected="false"
                                className="tab"
                            >
                                Additional information
                            </button>
                            <button
                                id="size-shape-tab"
                                role="tab"
                                aria-controls="size-shape-content"
                                aria-selected="false"
                                className="tab"
                            >
                                Size & Shape
                            </button>
                            <button
                                id="reviews-tab"
                                role="tab"
                                aria-controls="reviews-content"
                                aria-selected="false"
                                className="tab"
                            >
                                Reviews (3)
                            </button>
                        </div>
                        <div className="mt-8">
                            <div
                                id="description-content"
                                role="tabpanel"
                                aria-labelledby="description-tab"
                                className="tab-content"
                            >
                                <div className="flex flex-col lg:flex-row lg:space-x-8">
                                    <div className="w-full lg:w-1/2">
                                        <h3 className="text-xl font-semibold mb-2">
                                            With the new fashion trends and all the available shopping options, you can order
                                            your clothes online and make money without even leaving your house.
                                        </h3>
                                        <p className="mb-4">
                                            These days, you can take your own inspiration and create something new for yourself.
                                            All you need to do is read books and magazines about fashion, watch videos on
                                            YouTube, keep yourself updated on social media, and, of course, shop online!
                                        </p>
                                    </div>
                                    <div className="w-full lg:w-1/4">
                                        <h3 className="text-xl font-semibold mb-5">Material & Washing</h3>
                                        <p className="mb-2 pb-2 border-b border-gray-line">
                                            Material: <span className="font-semibold">100% cotton</span>
                                        </p>
                                        <p className="mb-2 pb-2 border-b border-gray-line">
                                            Fabric: <span className="font-semibold">Soft jersey</span>
                                        </p>
                                        <p className="mb-2">
                                            Care instructions: <span className="font-semibold">Machine wash at 30°C, do not
                                                tumble dry, iron on low heat, do not bleach</span>
                                        </p>
                                    </div>
                                    <div className="w-full lg:w-1/4">
                                        <h3 className="text-xl font-semibold mb-5">Size & Shape</h3>
                                        <p className="mb-2 pb-2 border-b border-gray-line">
                                            Model height: <span className="font-semibold">Our model is 180 cm tall and is
                                                wearing size M</span>
                                        </p>
                                        <p className="mb-2 pb-2 border-b border-gray-line">
                                            Fit: <span className="font-semibold">Regular</span>
                                        </p>
                                        <p className="mb-2 pb-2 border-b border-gray-line">
                                            Length: <span className="font-semibold">Standard</span>
                                        </p>
                                        <p className="mb-2">
                                            Sleeve length: <span className="font-semibold">Short sleeves</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                id="additional-info-content"
                                role="tabpanel"
                                aria-labelledby="additional-info-tab"
                                className="tab-content hidden"
                            >
                                <p>Additional information about the product.</p>
                                <div className="flex flex-col space-y-8">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">Colors</h3>
                                        <p className="text-base text-gray-700">
                                            Available colors:
                                            <a href="#" className="text-primary hover:underline">Red</a>,
                                            <a href="#" className="text-primary hover:underline">Blue</a>,
                                            <a href="#" className="text-primary hover:underline">Green</a>,
                                            <a href="#" className="text-primary hover:underline">Black</a>,
                                            <a href="#" className="text-primary hover:underline">White</a>.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">Brand</h3>
                                        <p className="text-base text-gray-700">
                                            This t-shirt is made by
                                            <a href="#" className="text-primary hover:underline">Nike</a>.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">Material & Care</h3>
                                        <p className="text-base text-gray-700">
                                            Material: 100% Cotton
                                            <br />
                                            Care instructions: Machine wash at 40 °C, do not tumble dry, iron at medium
                                            temperature, do not bleach.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                id="size-shape-content"
                                role="tabpanel"
                                aria-labelledby="size-shape-tab"
                                className="tab-content hidden"
                            >
                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white">
                                        <thead>
                                            <tr>
                                                <th className="px-6 py-3 border-b border-gray-line bg-gray-100 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
                                                    Size
                                                </th>
                                                <th className="px-6 py-3 border-b border-gray-line bg-gray-100 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
                                                    Chest (inches)
                                                </th>
                                                <th className="px-6 py-3 border-b border-gray-line bg-gray-100 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
                                                    Waist (inches)
                                                </th>
                                                <th className="px-6 py-3 border-b border-gray-line bg-gray-100 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
                                                    Sleeve Length (inches)
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-line text-sm leading-5 text-gray-700">
                                                    Small
                                                </td>
                                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-line text-sm leading-5 text-gray-700">
                                                    34-36
                                                </td>
                                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-line text-sm leading-5 text-gray-700">
                                                    28-30
                                                </td>
                                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-line text-sm leading-5 text-gray-700">
                                                    32-33
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-line text-sm leading-5 text-gray-700">
                                                    Medium
                                                </td>
                                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-line text-sm leading-5 text-gray-700">
                                                    38-40
                                                </td>
                                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-line text-sm leading-5 text-gray-700">
                                                    32-34
                                                </td>
                                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-line text-sm leading-5 text-gray-700">
                                                    33-34
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-line text-sm leading-5 text-gray-700">
                                                    Large
                                                </td>
                                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-line text-sm leading-5 text-gray-700">
                                                    42-44
                                                </td>
                                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-line text-sm leading-5 text-gray-700">
                                                    36-38
                                                </td>
                                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-line text-sm leading-5 text-gray-700">
                                                    34-35
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-line text-sm leading-5 text-gray-700">
                                                    X-Large
                                                </td>
                                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-line text-sm leading-5 text-gray-700">
                                                    46-48
                                                </td>
                                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-line text-sm leading-5 text-gray-700">
                                                    40-42
                                                </td>
                                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-line text-sm leading-5 text-gray-700">
                                                    35-36
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div
                                id="reviews-content"
                                role="tabpanel"
                                aria-labelledby="reviews-tab"
                                className="tab-content hidden"
                            >
                                <div>
                                    <h3 className="text-xl font-semibold mb-5">3 Reviews</h3>
                                    <div className="flex items-start mb-5">
                                        <img src="path/to/user-avatar.jpg" alt="User Avatar" className="w-10 h-10 rounded-full mr-4" />
                                        <div>
                                            <h4 className="font-semibold">John Doe</h4>
                                            <p className="text-sm text-gray-500">April 5, 2024</p>
                                            <p className="mt-1">
                                                Great quality! The fabric is soft and the fit is perfect. Highly recommend!
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start mb-5">
                                        <img src="path/to/user-avatar.jpg" alt="User Avatar" className="w-10 h-10 rounded-full mr-4" />
                                        <div>
                                            <h4 className="font-semibold">Jane Smith</h4>
                                            <p className="text-sm text-gray-500">March 20, 2024</p>
                                            <p className="mt-1">
                                                Not what I expected. The size runs a bit small, but still comfortable.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start mb-5">
                                        <img src="path/to/user-avatar.jpg" alt="User Avatar" className="w-10 h-10 rounded-full mr-4" />
                                        <div>
                                            <h4 className="font-semibold">Alice Johnson</h4>
                                            <p className="text-sm text-gray-500">February 15, 2024</p>
                                            <p className="mt-1">
                                                Good value for money. I love the color and style!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section id="latest-products" className="py-10">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-8">Latest Products</h2>
                <div className="flex flex-wrap -mx-4">
                    {/* Product 1 */}
                    <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                        <div className="bg-white p-3 rounded-lg shadow-lg">
                            <img src="assets/images/products/5.jpg" alt="Blue women's suit" className="w-full object-cover mb-4 rounded-lg" />
                            <a href="#" className="text-lg font-semibold mb-2">Blue Women's Suit</a>
                            <p className="my-2">Women</p>
                            <div className="flex items-center mb-4">
                                <span className="text-lg font-bold text-primary">$19.99</span>
                                <span className="text-sm line-through ml-2">$24.99</span>
                            </div>
                            <button className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full w-full">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                    {/* Product 2 */}
                    <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                        <div className="bg-white p-3 rounded-lg shadow-lg">
                            <img src="assets/images/products/6.jpg" alt="White shirt with long sleeves" className="w-full object-cover mb-4 rounded-lg" />
                            <a href="#" className="text-lg font-semibold mb-2">White Shirt with Long Sleeves</a>
                            <p className="my-2">Women</p>
                            <div className="flex items-center mb-4">
                                <span className="text-lg font-bold text-gray-900">$29.99</span>
                            </div>
                            <button className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full w-full">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                    {/* Product 3 */}
                    <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                        <div className="bg-white p-3 rounded-lg shadow-lg">
                            <img src="assets/images/products/7.jpg" alt="Yellow men's suit" className="w-full object-cover mb-4 rounded-lg" />
                            <a href="#" className="text-lg font-semibold mb-2">Yellow Men's Suit</a>
                            <p className="my-2">Men</p>
                            <div className="flex items-center mb-4">
                                <span className="text-lg font-bold text-gray-900">$15.99</span>
                                <span className="text-sm line-through ml-2">$19.99</span>
                            </div>
                            <button className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full w-full">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                    {/* Product 4 */}
                    <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                        <div className="bg-white p-3 rounded-lg shadow-lg">
                            <img src="assets/images/products/8.jpg" alt="Red dress" className="w-full object-cover mb-4 rounded-lg" />
                            <a href="#" className="text-lg font-semibold mb-2">Red Dress</a>
                            <p className="my-2">Women</p>
                            <div className="flex items-center mb-4">
                                <span className="text-lg font-bold text-primary">$39.99</span>
                                <span className="text-sm line-through ml-2">$49.99</span>
                            </div>
                            <button className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full w-full">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>                        

        </>
    )
}