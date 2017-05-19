@extends('app')

@section('head')
	<link rel="stylesheet" href="{{ url('css/select2.min.css') }}">
	<link rel="stylesheet" href="{{ url('css/daterangepicker.css') }}">
	<script src="http://maps.googleapis.com/maps/api/js?&libraries=places&key=AIzaSyD0QSm_gWjwbiW5NF6ScuQBUDfJHld-qc8"></script>
@append

@section('content')

	<div class="tg-homebannerandslider">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-8">
					<div class="row">
						<div class="tg-accordionandcategorysearch hidden-xs">
							<div class="tg-categoreyaccordion">
								<div class="tg-themescrollbar" style="height:296px;">
									<div id="tg-accordion" class="tg-accordion" role="tablist" aria-multiselectable="true">
										<div class="tg-panel">
											<div class="tg-accordionheading tg-automotive tg-radio">
												<input type="radio" id="tg-radioautomotive" name="tg-categories" value="automovice">
												<label for="tg-radioautomotive">
													<span class="fa fa-truck tg-categoryicon" style="background: teal"></span>
													<span class="tg-catenameandtypes">
															<span class="tg-categoryname">Online TransPortation</span>
															<span class="tg-typesandjobs">500+ Providers</span>
														</span>
												</label>
											</div>
											<div class="tg-panelcontent col-md-3">
												<div class="tg-subcategoryradio tg-radio">
													<input type="radio" id="tg-postload" name="tg-categories" value="Cab Service" checked>
													<label for="tg-postload">
														<span class="tg-categoryname">Post Load</span>
														{{--<span class="tg-typesandjobs">609 Providers</span>--}}
													</label>
												</div>
												<div class="tg-subcategoryradio tg-radio">
													<input type="radio" id="tg-posttruck" name="tg-categories" value="Car Care &amp; Servicing">
													<label for="tg-posttruck">
														<span class="tg-categoryname">Post Truck</span>
														{{--<span class="tg-typesandjobs">225 Providers</span>--}}
													</label>
												</div>
												{{--<div class="tg-subcategoryradio tg-radio">--}}
													{{--<input type="radio" id="tg-findload" name="tg-categories" value="Car Dealer">--}}
													{{--<label for="tg-findload">--}}
														{{--<span class="tg-categoryname">Find Load</span>--}}
														{{--<span class="tg-typesandjobs">490 Providers</span>--}}
													{{--</label>--}}
												{{--</div>--}}
												{{--<div class="tg-subcategoryradio tg-radio">--}}
													{{--<input type="radio" id="tg-findtruck" name="tg-categories" value="Rent A Car">--}}
													{{--<label for="tg-findtruck">--}}
														{{--<span class="tg-categoryname">Find Truck</span>--}}
														{{--<span class="tg-typesandjobs">1180 Providers</span>--}}
													{{--</label>--}}
												{{--</div>--}}
												{{--<div class="tg-subcategoryradio tg-radio">--}}
													{{--<input type="radio" id="tg-routeinfo" name="tg-categories" value="Denter and Painter">--}}
													{{--<label for="tg-routeinfo">--}}
														{{--<span class="tg-categoryname">Route Info</span>--}}
														{{--<span class="tg-typesandjobs">711 Providers</span>--}}
													{{--</label>--}}
												{{--</div>--}}
											</div>
										</div>

									</div>
								</div>
							</div>

						</div>
						<div class="tg-searchbox" style="padding-top:14px;">
							@include('partials._create_load');
						</div>

					</div>
				</div>
				<div class="col-md-4">

							{{--<figure class="tg-noticeboard"><img src="images/noticeboard.png" alt="image description" style="padding-bottom: 10px;"></figure>--}}

					<figure class="tg-featuredimg" style="width: 74%;">

							<a href="javascript:void(0);"><img src="images/hand.png" alt="image description"></a>
						</figure>

				</div>
			</div>
		</div>
	</div>

	<!--************************************
				Main Start
		*************************************-->
		<main id="tg-main" class="tg-main tg-haslayout">

				<section class="tg-main-section tg-haslayout">
					<div class="container">
						<div class="row">
							<div class="col-xs-12 col-sm-12 col-md-10 col-md-push-1 col-lg-8 col-lg-push-2">
								<div class="tg-sectionhead">
									<div class="tg-sectiontitle">
										<h2>READY TO HIRE TRUCKS?</h2>
									</div>
									<div class="tg-description">
										<p>We make truck hiring as simple as booking a movie ticket online!</p>
									</div>
								</div>
							</div>
							<div class="tg-servicesfacilities">
								<div class="row">
									<div class="col-md-4">
										<div class="tg-servicefacility">
											<span class="tg-servicefacilityicon tg-hasslefreelife"><i class="fa fa-shopping-cart"></i></span>
											<div class="tg-title">
												<h3>Online Market</h3>
											</div>
											<div class="tg-description">
												<p>We are an online truck market facilitating turck hiring through our portal which has created the infrastructure to identify,
													track and access trucks online.</p>
											</div>
										</div>
									</div>
									<div class="col-md-4">
										<div class="tg-servicefacility">
											<span class="tg-servicefacilityicon tg-allprofessionals"><i class="lnr lnr-heart"></i></span>
											<div class="tg-title">
												<h3>Verified Truck Base</h3>
											</div>
											<div class="tg-description">
												<p>TruckJee has taken great efforts to ensure that every truck hired through
													the platform meets the basic road transportation fitness criteria.
												</p>
											</div>
										</div>
									</div>
									<div class="col-md-4">
										<div class="tg-servicefacility">
											<span class="tg-servicefacilityicon tg-fiskfreeservices"><i class="fa fa-map-marker"></i></span>
											<div class="tg-title">
												<h3>Tracking & Rating</h3>
											</div>
											<div class="tg-description">
												<p>Our intelligent platform allows hirers to track their trucks in transit and rates
													the trucks based on their performance.</p>
											</div>
										</div>
									</div>

								</div>

								<div class="row">
									<div class="col-md-4">
										<div class="tg-servicefacility">
											<span class="tg-servicefacilityicon tg-savingyourtime"><i class="fa fa-unlock"></i></span>
											<div class="tg-title">
												<h3>Accessiblity</h3>
											</div>
											<div class="tg-description">
												<p>Our dashboard helps you to carry out business transactions at your leisure.
													We have crafted a system which eases your truck hiring experience.
												</p>
											</div>
										</div>
									</div>
									<div class="col-md-4">
										<div class="tg-servicefacility">
											<span class="tg-servicefacilityicon tg-savingyourcost"><i class="fa fa-lock"></i></span>
											<div class="tg-title">
												<h3>Business Confidentiality</h3>
											</div>
											<div class="tg-description">
												<p>Every transaction happening on the portal is confined between the two participating parties.
													Transactions are only visible to you, unless you decide to share it.
												</p>
											</div>
										</div>
									</div>
									<div class="col-md-4">
										<div class="tg-servicefacility">
											<span class="tg-servicefacilityicon tg-premiumexperience"><i class="fa fa-globe"></i></span>
											<div class="tg-title">
												<h3>Nationalwide Availability</h3>
											</div>
											<div class="tg-description">
												<p>From Jammu to kanyakumari, We offer fast, reliable and accurate nationwide truck connectivity directly to your doors, factory and warehouses.</p>
											</div>
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>
				</section>
				<!--************************************
                        Services Facilities End
                *************************************-->
				<!--************************************
                        Company Video Start
                *************************************-->
				<section class="tg-haslayout tg-bglight">
					<div class="container">
						<div class="row">
							<div class="col-md-6 col-xs-12">
								<iframe class="col-md-12" height="450px" src="https://www.youtube.com/embed/5NvlrOgraqo" frameborder="0" allowfullscreen=""></iframe>
							</div>
							<div class="col-md-6 col-xs-12">
								<h3 class="subheading text-center" style="margin-top:0px">Benefits</h3>
								<p>
									TruckJee facilitates online truck hiring. TruckJee does not take part in any of your transactions. The business decisions are at the comfort of the participating parties. and TruckJees aims to create a transparent platform for communication and business generation between the parties.
								</p>
								<ul class="tg-contactinfo">
									<li>
										<p>Higher quality service by optimizing transport routes, means of transportation and reducing costs.</p>
									</li>
									<li>
										<p>Access to a large pool of verified trucks across the country waiting for business.</p>
									</li>
									<li>
										<p>Trucks hired through TruckJee have GPS Tracker installed which allows you to track your cargo online.</p>
									</li>
									<li>
										<p>Strong optimized auction system that will make a competitive advantage to your business.</p>
									</li>
									<li>
										<p>Synchronized bidding process which ensures best rates from multiple business owners.</p>
									</li>
									<li>
										<p>Hassles of collecting and distributing balance payments are reduced and are systematically processed.</p>
									</li>
									<li>
										<p>Reduce the amount of stress and phone calls by shifting to our online transportation ERP which is a one stop for all your transportation needs.</p>
									</li>
								</ul>
							</div>
						</div>

					</div>
				</section>

				<section class="tg-main-section tg-haslayout tg-bglight">
					<div class="container">
						<div class="row">
							<div class="col-xs-12 col-sm-12 col-md-10 col-md-push-1 col-lg-8 col-lg-push-2">
								<div class="tg-sectiontitle">
									<h2>Easiest Way To Get Services</h2>
								</div>
							</div>
							<div class="tg-advantagies">
								<div class="col-xs-6 col-sm-6 col-md-3 col-lg-3">
									<div class="tg-advantage tg-advantageplan">
									<span class="tg-advantageicon">
										<i class="tg-badge">1</i>
										<em><img src="images/advantagies/img-01.png" alt="image description"></em>
									</span>
										<div class="tg-title">
											<h3><a href="#"></a>Require</h3>
										</div>
										<div class="tg-description">
											<p>After filling out our basic requirement form online through your dashboard,
												eligable truck vendors are automatically notified about your indent and would respond with their quotes for your requirement.
											</p>
										</div>
									</div>
								</div>
								<div class="col-xs-6 col-sm-6 col-md-3 col-lg-3">
									<div class="tg-advantage tg-advantagechoosebest">
									<span class="tg-advantageicon">
										<i class="tg-badge">2</i>
										<em><img src="images/advantagies/img-02.png" alt="image description"></em>
									</span>
										<div class="tg-title">
											<h3><a href="#">Match</a></h3>
										</div>
										<div class="tg-description">
											<p>From your list of quotes, select any vendor based on their quoted rate or their performance. TruckJee will confirm with these vendors and generate a transaction.</p>
										</div>
									</div>
								</div>
								<div class="col-xs-6 col-sm-6 col-md-3 col-lg-3">
									<div class="tg-advantage tg-advantageexperience">
									<span class="tg-advantageicon">
										<i class="tg-badge">3</i>
										<em><img src="images/advantagies/img-05.png" alt="image description"></em>
									</span>
										<div class="tg-title">
											<h3><a href="#">Transact</a></h3>
										</div>
										<div class="tg-description">
											<p>TruckJee will ensure that the truck you selected reaches your loading point at the date of your requirement. You can also track this truck after vendor confirmation till transaction completion.</p>
										</div>
									</div>
								</div>
								<div class="col-xs-6 col-sm-6 col-md-3 col-lg-3">
									<div class="tg-advantage tg-advantagestressfree">
									<span class="tg-advantageicon">
										<i class="tg-badge">4</i>
										<em><img src="images/advantagies/img-03.png" alt="image description"></em>
									</span>
										<div class="tg-title">
											<h3><a href="#">Live Stress Free</a></h3>
										</div>
										<div class="tg-description">
											<p>After completing your trancation truckjee enabled to track your trucks.Knowing the location of your trucks and drivers at all the time.</p>
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>
				</section>

			<section class="tg-main-section tg-haslayout">
				<div class="container">
					<div class="row">
						<div class="col-xs-12 col-sm-12 col-md-10 col-md-push-1 col-lg-8 col-lg-push-2">
							<div class="tg-sectionhead">
								<div class="tg-sectiontitle">
									<h2>News & Articles</h2>
								</div>
								{{--<div class="tg-description">--}}
									{{--<p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim adia minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip extea commodo consequat.</p>--}}
								{{--</div>--}}
							</div>
						</div>
						<div class="tg-newsandposts">
							<div class="col-xs-6 col-sm-6 col-md-3 col-lg-3">
								<article class="tg-post">
									<figure class="tg-featuredimg">
										<a href="http://epaper.newindianexpress.com/m/898609/The-New-Indian-Express-Chennai/07082016#issue/13/2"><img src="images/news/img1.jpg" alt="image description"></a>
									</figure>
									<div class="tg-postcontent">
										<div class="tg-title">
											<h3><a href=" http://epaper.newindianexpress.com/m/898609/The-New-Indian-Express-Chennai/07082016#issue/13/2 ">An Ola for Heavy duty trucks?</a></h3>
										</div>
										<ul class="tg-postmatadata">
											<li>
													<i class="lnr lnr-user"></i>
													<span>BY: Jonathan Ananda</span>

											</li>
											<li>
												<a href="#">
													<i class="lnr lnr-calendar-full"></i>
													<span>August 7, 2016</span>
												</a>
											</li>
										</ul>
									</div>
								</article>
							</div>
							<div class="col-xs-6 col-sm-6 col-md-3 col-lg-3">
								<article class="tg-post">
									<figure class="tg-featuredimg">
										<a href="http://www.thehindubusinessline.com/economy/logistics/truckjee-an-online-portal-to-link-truck-owners-and-transporters/article8938837.ece"><img src="images/news/img2.jpg" alt="image description"></a>
									</figure>
									<div class="tg-postcontent">
										<div class="tg-title">
											<h3><a href="http://www.thehindubusinessline.com/economy/logistics/truckjee-an-online-portal-to-link-truck-owners-and-transporters/article8938837.ece">Truckjee an Online Portal</a></h3>
										</div>
										<ul class="tg-postmatadata">
											<li>
												<a href="#">
													<i class="lnr lnr-calendar-full"></i>
													<span>August 3, 2016</span>
												</a>
											</li>
										</ul>
									</div>
								</article>
							</div>
							<div class="col-xs-6 col-sm-6 col-md-3 col-lg-3">
								<article class="tg-post">
									<figure class="tg-featuredimg">
										<a href="http://www.thehindu.com/todays-paper/tp-business/Truckjee-rolls-out-online-portal-for-truck-hiring/article14554806.ece"><img src="images/news/img3.jpg" alt="image description"></a>
									</figure>
									<div class="tg-postcontent">
										<div class="tg-title">
											<h3><a href="http://www.thehindu.com/todays-paper/tp-business/Truckjee-rolls-out-online-portal-for-truck-hiring/article14554806.ece">Truckjee rolls out online portal</a></h3>
										</div>
										<ul class="tg-postmatadata">

											<li>
												<a href="#">
													<i class="lnr lnr-calendar-full"></i>
													<span>August 6, 2016</span>
												</a>
											</li>
										</ul>
									</div>
								</article>
							</div>
							<div class="col-xs-6 col-sm-6 col-md-3 col-lg-3">
								<article class="tg-post">
									<figure class="tg-featuredimg">
										<a href="http://www.livechennai.com/detailnews.asp?catid=&newsid=28342"><img src="images/news/img5.png" alt="image description"></a>
									</figure>
									<div class="tg-postcontent">
										<div class="tg-title">
											<h3><a href="http://www.livechennai.com/detailnews.asp?catid=&newsid=28342">TruckJee.com, a B2B Digital Market place launched
												</a></h3>
										</div>
										<ul class="tg-postmatadata">
											<li>
												<a href="#">
													<i class="lnr lnr-calendar-full"></i>
													<span>August 4, 2016</span>
												</a>
											</li>
										</ul>
									</div>
								</article>
							</div>
						</div> <br/>
						{{--<div class="tg-newsandposts">--}}
							{{--<div class="col-xs-6 col-sm-6 col-md-3 col-lg-3">--}}
								{{--<article class="tg-post">--}}
									{{--<figure class="tg-featuredimg">--}}
										{{--<a href="javascript:void(0);"><img src="images/news/img9.png" alt="image description" width="40" height="40"></a>--}}
									{{--</figure>--}}
									{{--<div class="tg-postcontent">--}}
										{{--<div class="tg-title">--}}
											{{--<h3><a href="http://www.chennaicitynews.net/news/truckjee-com-a-b2b-digital-marketplace-launched-paradigm-shift-in-truck-procurement-aggregation-27309/">Truckjee an Online Portal</a></h3>--}}
										{{--</div>--}}
										{{--<ul class="tg-postmatadata">--}}
											{{--<li>--}}
												{{--<a href="#">--}}
													{{--<i class="lnr lnr-calendar-full"></i>--}}
													{{--<span>August 3, 2016</span>--}}
												{{--</a>--}}
											{{--</li>--}}
										{{--</ul>--}}
									{{--</div>--}}
								{{--</article>--}}
							{{--</div>--}}
							{{--<div class="col-xs-6 col-sm-6 col-md-3 col-lg-3">--}}
								{{--<article class="tg-post">--}}
									{{--<figure class="tg-featuredimg">--}}
										{{--<a href="javascript:void(0);"><img src="images/news/img10.png" alt="image description" ></a>--}}
									{{--</figure>--}}
									{{--<div class="tg-postcontent">--}}
										{{--<div class="tg-title">--}}
											{{--<h3><a href="http://www.livechennai.com/detailnews.asp?catid=&newsid=28342">B2B Digital Market place launched--}}
												{{--</a></h3>--}}
										{{--</div>--}}
										{{--<ul class="tg-postmatadata">--}}
											{{--<li>--}}
												{{--<a href="#">--}}
													{{--<i class="lnr lnr-calendar-full"></i>--}}
													{{--<span>August 4, 2016</span>--}}
												{{--</a>--}}
											{{--</li>--}}
										{{--</ul>--}}
									{{--</div>--}}
								{{--</article>--}}
							{{--</div>--}}
							{{--<div class="col-xs-6 col-sm-6 col-md-3 col-lg-3">--}}
								{{--<article class="tg-post">--}}
									{{--<figure class="tg-featuredimg">--}}
										{{--<a href="javascript:void(0);"><img src="images/news/img6.jpg" alt="image description"></a>--}}
									{{--</figure>--}}
									{{--<div class="tg-postcontent">--}}
										{{--<div class="tg-title">--}}
											{{--<h3><a href="http://www.b4umedia.in/?p=72008 ">TRUCKJEE.COM, A B2B DIGITAL MARKETPLACE LAUNCHED PARADIGM SHIFT IN TRUCK LAUNCHE NEWS, IMAGES& VIDEO LINK</a></h3>--}}
										{{--</div>--}}
										{{--<ul class="tg-postmatadata">--}}
											{{--<li>--}}
												{{--<a href="#">--}}
													{{--<i class="lnr lnr-calendar-full"></i>--}}
													{{--<span>August 4, 2016</span>--}}
												{{--</a>--}}
											{{--</li>--}}
										{{--</ul>--}}
									{{--</div>--}}
								{{--</article>--}}
							{{--</div>--}}

							{{--<div class="col-xs-6 col-sm-6 col-md-3 col-lg-3">--}}
								{{--<article class="tg-post">--}}
									{{--<figure class="tg-featuredimg">--}}
										{{--<a href="javascript:void(0);"><img src="images/news/img8.jpg" alt="image description"></a>--}}
									{{--</figure>--}}
									{{--<div class="tg-postcontent">--}}
										{{--<div class="tg-title">--}}
											{{--<h3><a href="http://news.chennaipatrika.com/post/2016/08/03/TruckJee-launched-Paradigm-shift-in-Truck-procurement-aggregation.aspx">Truckjee.com launched paradigm shift in truck procurement & aggregation.</a></h3>--}}
										{{--</div>--}}
										{{--<ul class="tg-postmatadata">--}}

											{{--<li>--}}
												{{--<a href="#">--}}
													{{--<i class="lnr lnr-calendar-full"></i>--}}
													{{--<span>August 3, 2016</span>--}}
												{{--</a>--}}
											{{--</li>--}}
										{{--</ul>--}}
									{{--</div>--}}
								{{--</article>--}}
							{{--</div>--}}

						{{--</div>--}}
					</div>
				</div>
			</section>
			<!--************************************
					News & Posts End
			*************************************-->
		</main>
		<!--************************************
				Main End
		*************************************-->

@endsection

@section('scripts')
	<script src="{{ url('js/jquery.geocomplete.min.js') }}"></script>
	<script src="{{ url('js/select2.min.js') }}"></script>
	<script src="{{ url('js/moment.min.js') }}"></script>
	<script src="{{ url('js/daterangepicker.js') }}"></script>
	<script>


		$('#source').geocomplete({
			country: 'IN',
			details: "#source_details",
			detailsAttribute: 'id'
		});
		$('#destination').geocomplete({
			country: 'In',
			details: '#destination_details',
			detailsAttribute:'id'
		});
		$('#trucktype').select2({
			allowClear:true,
			placeholder:"Truck Type"
		});
		$('#date').daterangepicker({
			singleDatePicker: true,
			showDropdowns: true,
			locale: {
				"format": "DD/MM/YYYY",
			},
			minDate: new Date()
		});

		$('#tg-postload,#tg-posttruck').click(function () {
			if($(this).attr('id') == 'tg-postload'){
				document.getElementById('type').value = "1";
//				document.getElementById('truck_number').style.display = "none";
				$('#destination').removeAttr('disabled');
				$('#material').removeAttr('disabled');
                $('#truck_number').attr('disabled' ,true);
//				document.getElementById('material').style.display = "block";
				$('#source').attr('placeholder','Source');
			}
			if($(this).attr('id') == 'tg-posttruck'){
				document.getElementById('type').value = "2";
//				document.getElementById('truck_number').style.display = "block";
				$('#destination').attr('disabled',true);
				$('#material').attr('disabled',true);
                $('#truck_number').removeAttr('disabled');
//				document.getElementById('material').style.display = "none";
				$('#source').attr('placeholder','Current Location');
			}
			document.getElementById('drivername').style.display = "block";
			document.getElementById('driverphone').style.display = "block";

		});


	</script>

	@append
