import React from 'react'
import Nav from '../components/Nav';
import { MdNavigateNext } from "react-icons/md";

function Blog() {
    return (
        <>
            <Nav />
            <div class="container">
                <div class="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
                    <a href="/" class="stext-109 cl8 hov-cl1 trans-04">
                        Home
                        <MdNavigateNext />
                    </a>

                    <a href="blog.html" class="stext-109 cl8 hov-cl1 trans-04">
                        Blog
                        <MdNavigateNext />
                    </a>

                    <span class="stext-109 cl4">
                        8 Inspiring Ways to Wear Dresses in the Winter
                    </span>
                </div>
            </div>
            <div className='shh'>
                <div>
                    <img src="images/blog-01.jpg" alt="" />
                    <span>By Admin |
                        22 Jan, 2018 |
                        StreetStyle, Fashion, Couple |
                        8 Comments</span>
                </div>
                <div>
                    <h1>8 Inspiring Ways to Wear Dresses in the Winter</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet est vel orci luctus sollicitudin. Duis eleifend vestibulum justo, varius semper lacus condimentum dictum. Donec pulvinar a magna ut malesuada. In posuere felis diam, vel sodales metus accumsan in. Duis viverra dui eu pharetra pellentesque. Donec a eros leo.
                        <br />
                        Quisque sed ligula vitae lorem efficitur faucibus. Praesent sit amet imperdiet ante. Nulla id tellus auctor, dictum libero a, malesuada nisi. Nulla in porta nibh, id vestibulum ipsum. Praesent dapibus tempus erat quis aliquet. Donec ac purus id sapien condimentum feugiat.
                        <br />
                        <br />
                        Praesent vel mi bibendum, finibus leo ac, condimentum arcu. Pellentesque sem ex, tristique sit amet suscipit in, mattis imperdiet enim. Integer tempus justo nec velit fringilla, eget eleifend neque blandit. Sed tempor magna sed congue auctor. Mauris eu turpis eget tortor ultricies elementum. Phasellus vel placerat orci, a venenatis justo. Phasellus faucibus venenatis nisl vitae vestibulum. Praesent id nibh arcu. Vivamus sagittis accumsan felis, quis vulputate
                    </p>
                </div>
                <div class="flex-w flex-t p-t-16">
                    <span class="size-216 stext-116 cl8 p-t-4">
                        Tags
                    </span>

                    <div class="flex-w size-217">
                        <a href="#" class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                            Streetstyle
                        </a>

                        <a href="#" class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                            Crafts
                        </a>
                    </div>
                </div>
                <div class="p-t-40">
                    <h5 class="mtext-113 cl2 p-b-12">
                        Leave a Comment
                    </h5>

                    <p class="stext-107 cl6 p-b-40">
                        Your email address will not be published. Required fields are marked *
                    </p>

                    <form>
                        <div class="bor19 m-b-20">
                            <textarea class="stext-111 cl2 plh3 size-124 p-lr-18 p-tb-15" name="cmt" placeholder="Comment..."></textarea>
                        </div>

                        <div class="bor19 size-218 m-b-20">
                            <input class="stext-111 cl2 plh3 size-116 p-lr-18" type="text" name="name" placeholder="Name *" />
                        </div>

                        <div class="bor19 size-218 m-b-20">
                            <input class="stext-111 cl2 plh3 size-116 p-lr-18" type="text" name="email" placeholder="Email *" />
                        </div>

                        <div class="bor19 size-218 m-b-30">
                            <input class="stext-111 cl2 plh3 size-116 p-lr-18" type="text" name="web" placeholder="Website" />
                        </div>

                        <button class="flex-c-m stext-101 cl0 size-125 bg3 bor2 hov-btn3 p-lr-15 trans-04">
                            Post Comment
                        </button>
                    </form>
                </div>
                <br />
                <footer>
                    <div class="er">
                        <div class="col-sm-6 col-lg-3 p-b-50">
                            <h4 class="stext-301 cl0 p-b-30">
                                Categories
                            </h4>

                            <ul>
                                <li class="p-b-10">
                                    <a href="#" class="stext-107 cl7 hov-cl1 trans-04">
                                        Women
                                    </a>
                                </li>

                                <li class="p-b-10">
                                    <a href="#" class="stext-107 cl7 hov-cl1 trans-04">
                                        Men
                                    </a>
                                </li>

                                <li class="p-b-10">
                                    <a href="#" class="stext-107 cl7 hov-cl1 trans-04">
                                        Shoes
                                    </a>
                                </li>

                                <li class="p-b-10">
                                    <a href="#" class="stext-107 cl7 hov-cl1 trans-04">
                                        Watches
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="col-sm-6 col-lg-3 p-b-50">
                            <h4 class="stext-301 cl0 p-b-30">
                                Help
                            </h4>

                            <ul>
                                <li class="p-b-10">
                                    <a href="#" class="stext-107 cl7 hov-cl1 trans-04">
                                        Track Order
                                    </a>
                                </li>

                                <li class="p-b-10">
                                    <a href="#" class="stext-107 cl7 hov-cl1 trans-04">
                                        Returns
                                    </a>
                                </li>

                                <li class="p-b-10">
                                    <a href="#" class="stext-107 cl7 hov-cl1 trans-04">
                                        Shipping
                                    </a>
                                </li>

                                <li class="p-b-10">
                                    <a href="#" class="stext-107 cl7 hov-cl1 trans-04">
                                        FAQs
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="col-sm-6 col-lg-3 p-b-50">
                            <h4 class="stext-301 cl0 p-b-30">
                                GET IN TOUCH
                            </h4>

                            <p class="stext-107 cl7 size-201">
                                Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
                            </p>

                            <div class="p-t-27">
                                <a href="#" class="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                                    <i class="fa fa-facebook"></i>
                                </a>

                                <a href="#" class="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                                    <i class="fa fa-instagram"></i>
                                </a>

                                <a href="#" class="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                                    <i class="fa fa-pinterest-p"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="tyu">
                        <div class="insta"><i class="bi bi-instagram"></i></div>
                        <div class="face"><i class="bi bi-facebook"></i></div>
                        <div class="twitter"><i class="bi bi-twitter-x"></i></div>
                        <div class="linkedin"><i class="bi bi-linkedin"></i></div>
                    </div>
                    <div class="mlp">
                        <div class="last"><h3>2025 COZA STORE PVT.LTD.</h3></div>
                        <div class="COUNTR"><h4>Country India</h4></div>

                    </div>
                </footer>
            </div>
        </>
    )
}

export default Blog
