@extends('app')

@section('head')

    @append

@section('content')

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
    @endsection


@section('scripts')

    @stop