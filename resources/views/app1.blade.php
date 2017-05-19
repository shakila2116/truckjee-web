
<!doctype html>
<!--[if lt IE 7]>		<html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>			<html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>			<html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!-->	<html class="no-js" lang=""> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>TruckJee.com | Hire trucks online</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="apple-touch-icon" href="apple-touch-icon.png">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="css/linearicons.css">
    <link rel="stylesheet" href="css/scrollbar.css">
    <link rel="stylesheet" href="css/jquery-ui.css">
    <link rel="stylesheet" href="css/prettyPhoto.css">
    <link rel="stylesheet" href="css/owl.carousel.min.css">
    <link rel="stylesheet" href="css/owl.theme.default.min.css">
    <link rel="stylesheet" href="css/jquery.countdown.css">
    <link rel="stylesheet" href="css/animate.css">
    <link rel="stylesheet" href="css/transitions.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/color.css">
    <link rel="stylesheet" href="css/responsive.css">
    @yield('head')
    <script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>
</head>



<body class="tg-home tg-login">
<!--[if lt IE 8]>
<!--<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>-->
<![endif]-->
<!--************************************
        Preloader Start
*************************************-->
<div class="preloader-outer">
    <div class="pin"></div>
    <div class="pulse"></div>
</div>


<!--************************************
        Preloader End
*************************************-->
<!--************************************
        Wrapper Start
*************************************-->
<div id="tg-wrapper" class="tg-wrapper tg-haslayout">
    <!--************************************
            Header Start
    *************************************-->
    <header id="tg-header" class="tg-header tg-haslayout">
        <div class="tg-topbar tg-haslayout">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-xs-12">
                        {{--<ul class="tg-addressinfo">--}}
                        {{--<li>--}}
                        {{--<i class="lnr lnr-envelope"></i>--}}
                        {{--<a href="mailto:info@domain.com">info@truckjee.com</a>--}}
                        {{--</li>--}}
                        {{--<li>--}}
                        {{--<i class="lnr lnr-phone-handset"></i>--}}
                        {{--<span> 044 42127143</span>--}}
                        {{--</li>--}}
                        {{--</ul>--}}
                        <strong class="tg-logo"><a href="index.html"><img src="images/blue-logo.png" alt="image description" width="155px" style="margin-top: 13px;"></a></strong>
                        <div id="tg-navigation" class="collapse navbar-collapse tg-navigation">
                            <ul>
                                <li><a href="/">Home</a></li>
                                {{--<li><a href="{{url('/aboutus')}}">About</a></li>--}}
                                {{--<li><a href="{{url('/services')}}">Services</a></li>--}}
                                <li><a href="{{url('/contact')}}">Contact</a></li>
                                {{--<li><a href="aboutus.html">Blog</a></li>--}}
                                <li><a href="http://panel.truckjee.com">Login</a></li>
                            </ul>
                        </div>

                        <div class="tg-useradminbox">
                            <div class="tg-loginregister">
                                <a class="tg-btnlogin" href="javascript:void(0);">Login</a>
                                <a class="tg-btnregister" href="javascript:void(0);">Register</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tg-navigationarea">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-xs-12">
                        <figure  style="width: 100%">
                            {{--<a href="javascript:void(0);"><img src="images/header-bg1.jpg" alt="image description"></a>--}}
                        </figure>

                        {{--<strong class="tg-logo"><a href="index.html"><img src="images/blue-logo.png" alt="image description" width="155px" style="margin-top: 13px;"></a></strong>--}}
                        <div class="tg-rightarea">
                            <nav id="tg-nav" class="tg-nav">
                                <div class="navbar-header">
                                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#tg-navigation" aria-expanded="false">
                                        <span class="sr-only">Toggle navigation</span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                    </button>
                                </div>

                            </nav>
                            {{--<a class="tg-btn tg-btnpostanewjob" href="dashboard.html">Post A New Job</a>--}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>


    <!--************************************
            Header End
    *************************************-->
    <!--************************************
            Home Slider Start
    *************************************-->
    <!--************************************
            Home Slider End
    *************************************-->

@yield('content')
<!--************************************
				Footer Start
		*************************************-->
    <footer id="tg-footer" class="tg-footer tg-haslayout">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <ul class="tg-features">
                        <li>
                            <div class="tg-feature">
									<span class="tg-featureicon">
										<i class="lnr lnr-diamond"></i>
									</span>
                                <div class="tg-featurecontent">
                                    <h3>Best TruckJee Award</h3>
                                    <span>Earned Best Start-up award in 2017</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="tg-feature">
									<span class="tg-featureicon">
										<i class="lnr lnr-users"></i>
									</span>
                                <div class="tg-featurecontent">
                                    <h3>TruckJee Vendors</h3>
                                    <span>More than 500 trucks Registered</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="tg-feature">
									<span class="tg-featureicon">
										<i class="lnr lnr-diamond"></i>
									</span>
                                <div class="tg-featurecontent">
                                    <h3>User Friendly Focused</h3>
                                    <span>Given attention to rich user experience</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="tg-fourcolumns">
                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-4">
                        <div class="tg-footercolumn">
                            {{--<strong class="tg-logo"><a href="#"><img src="images/logo1.png" alt="image description"></a></strong>--}}
                            <ul class="tg-contactinfo">
                                <li>
                                    <i class="lnr lnr-location"></i>
                                    <address>    1 & 1A, Ur Nagar west extension,<br/>
                                        Anna Nagar west Extension, Padi, <br/>
                                        U R Nagar Extension,<br/>
                                        AP Block, Sector A,Chennai-600050</address>
                                </li>
                                <li>
                                    <i class="lnr lnr-phone-handset"></i>
                                    <span>  044 42127143</span>
                                </li>
                                <li>
                                    <i class="lnr lnr-envelope"></i>
                                    <span><a href="query@domain.com">info@truckjee.com</a></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-4">
                        <div class="tg-footercolumn tg-widget tg-widgettwitter">
                            <div class="tg-widgettitle">
                                <h3>Latest News</h3>
                            </div>
                            <div class="tg-widgetcontent">
                                <ul>
                                    <li>
                                        <div class="tg-description"><p>
                                                The Igniters,A coffee table book launched by the economics times tells the stories of Truckjee that is on their way to greatness.
                                            </p></div>
                                        <a href="../images/igniters.png">The Igniters Event</a>
                                        {{--<time datetime="2016-08-08">2 hours ago</time>--}}
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-4">
                        <div class="tg-footercolumn tg-widget tg-widgetusefullinks">
                            <div class="tg-widgettitle">
                                <h3>Useful Links</h3>
                            </div>
                            <div class="tg-widgetcontent">
                                <ul>
                                    <li><a href="/terms">Term and Conditions</a></li>
                                    <li><a href="/contact">Contact</a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    {{--<div class="col-xs-6 col-sm-6 col-md-6 col-lg-3">--}}
                    {{--<div class="tg-footercolumn tg-widget tg-widgetfreeinspection">--}}
                    {{--<div class="tg-widgettitle">--}}
                    {{--<h3>Offer Free Inspection</h3>--}}
                    {{--</div>--}}
                    {{--<div class="tg-widgetcontent">--}}
                    {{--<ul>--}}
                    {{--<li>--}}
                    {{--<figure><a href="#"><img src="images/logos/img-01.png" alt="image description"></a></figure>--}}
                    {{--<div class="tg-contentbox">--}}
                    {{--<h4><a href="#">Manchester Cleaning Service</a></h4>--}}
                    {{--<ul class="tg-matadata">--}}
                    {{--<li><span class="tg-stars"><span></span></span></li>--}}
                    {{--<li>--}}
                    {{--<i class="fa fa-thumbs-o-up"></i>--}}
                    {{--<em>99% (1009 votes)</em>--}}
                    {{--</li>--}}
                    {{--</ul>--}}
                    {{--</div>--}}
                    {{--</li>--}}
                    {{--</ul>--}}
                    {{--</div>--}}
                    {{--</div>--}}
                    {{--</div>--}}
                </div>
            </div>
        </div>
        <div class="tg-footerbar">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <span>Copyright © Jeeth Trucks Private Limited 2016</span>
                        <nav class="tg-footernav">
                            <ul>
                                {{--<li><a href="#">Privacy Policy</a></li>--}}
                                <li><a href="/terms">Term and Conditions</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!--************************************
            Footer End
    *************************************-->
</div>
<!--************************************
        Wrapper End
*************************************-->

<script src="js/vendor/jquery-library.js"></script>
<script src="js/vendor/bootstrap.min.js"></script>
<script src="js/mapclustering/data.json"></script>
<script src="js/mapclustering/markerclusterer.min.js"></script>
<script src="js/mapclustering/infobox.js"></script>
<script src="js/mapclustering/map.js"></script>
<script src="js/jquery.countdown.js"></script>
<script src="js/owl.carousel.min.js"></script>
<script src="js/scrollbar.min.js"></script>
<script src="js/prettyPhoto.js"></script>
<script src="js/jquery-ui.js"></script>
<script src="js/readmore.js"></script>
<script src="js/gmap3.js"></script>
<script src="js/main.js"></script>
@yield('scripts')
</body>
</html>