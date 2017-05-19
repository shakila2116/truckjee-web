@extends('app')

@section('head')
    <script src="http://maps.googleapis.com/maps/api/js?&libraries=places&key=AIzaSyD0QSm_gWjwbiW5NF6ScuQBUDfJHld-qc8"></script>

    @stop

@section('content')

    <div class="tg-innerpagebanner">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="tg-pagetitle">
                        <h1>contact</h1>
                    </div>
                    <ol class="tg-breadcrumb">
                        <li><a href="/">Home</a></li>
                        <li class="/contact">contact</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>

        <main id="tg-main" class="tg-main tg-paddingzero tg-haslayout">
            <div class="tg-main-section tg-haslayout">
                <div class="container">
                    <div class="row">
                        {{--<div id="tg-twocolumns" class="tg-twocolumns">--}}
                            <div class="col-xs-12 col-sm-12 col-md-10 col-md-push-1 col-lg-8 col-lg-push-2">
                                <div class="tg-sectionhead">
                                    <div class="tg-sectiontitle">
                                        <h2>Our Presence</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                {{--<div id="tg-officelocationmap" class="tg-locationmap tg-contactusmap">--}}
                                <div class="google-maps">
                                    <div class="overlay" onClick="style.pointerEvents='none'" style="background:transparent;
                                       position:relative;
                                       /*width:500px;*/
                                       height:484px; /* your iframe height */
                                       top:450px;  /* your iframe height */
                                       margin-top:-485px;  /* your iframe height */">
                                    </div>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1374.0021967394014!2d80.2135734726199!3d13.082379192272743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526420db2ff731%3A0xe7bf9c5b119a47ab!2sTruckJee!5e0!3m2!1sen!2sin!4v1451375635230" width="600" height="450" frameborder="0" style="border:0;"  allowfullscreen></iframe>
                                </div>
                            </div>
                         <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" style="padding-left: 35px;">
                                        <div class="tg-title">
                                            <h3>Chennai - Head Office</h3>
                                        </div>
                                            <address>
                                                1 & 1A, Ur Nagar west extension,<br/>
                                                Anna Nagar west Extension, Padi, <br/>
                                                U R Nagar Extension,<br/>
                                                AP Block, Sector A,Chennai-600050
                                            </address>
                                            <b> <p style="margin-top: -17px;"><i class="fa fa-phone"></i>
                                             044 42127143
                                            </p> </b>
                                            <b> <p style="margin-top: -20px;"><i class="fa fa-envelope"> </i> info@truckjee.com </p></b>

                                        {{--<div class="col-xs-6 col-sm-3 col-md-3 col-lg-6">--}}
                                            <div class="tg-title">
                                                <h3>Namakkal - Branch</h3>
                                            </div>

                                                <address> Sri Durga Tower, <br/>
                                                    No : 187, First Floor, <br/>
                                                    Salem Road, <br/>
                                                    Namakkal - 637001.
                                                </address>

                                                <p style="margin-top: -15px"> <b><i class="fa fa-envelope"></i> namakkal@truckjee.com </b> </p>
                                            {{--</div>--}}
                                        {{--<div class="col-xs-6 col-sm-3 col-md-3 col-lg-6">--}}
                                          <div class="tg-title">
                                                <h3>Sankari - Branch</h3>
                                            </div>
                                                <address> 18D6 - AF4, <br/>
                                                    Settia Gounder Complex,<br/>
                                                    Bhavani Main Road, <br/>
                                                    Sankagiri T.K,
                                                    Salem - 637301.<br/>
                                                </address>
                                                <p style="margin-top: -15px;"> <b><i class="fa fa-envelope"></i> sankagiri@truckjee.com </b> </p>
                                        {{--</div>--}}
                            </div>
                        </div>
                    </div>
                </div>
            {{--</div>--}}

            {{--<div class="tg-main-section tg-haslayout">--}}

            <section class="tg-main-section tg-haslayout tg-bglight">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <figure class="tg-noticeboard"><img src="images/lo.png" alt="image description"></figure>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                            <div class="tg-secureandreliable">
                                <div class="tg-textshortcode">
                                    <h2>Start Earning Today!</h2>
                                    <h3>It’s Easy Its Reliable</h3>
                                    <div class="tg-description">
                                        <p> We enable you to hire a truck through our portal which has created the infrastructure to identify, track and access trucks online.</p>
                                    </div>
                                </div>
                                {{--<a class="tg-btn" href="#">Join Now</a>--}}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-10 col-md-push-1 col-lg-8 col-lg-push-2">
                            <div class="tg-sectionhead">
                                <div class="tg-sectiontitle">
                                    <h2>Let's talk </h2>
                                </div>
                                <div class="tg-description">
                                    <p> Questions? Comments? We'd love to hear from you. <br/>
                                        Please don't hesitate to get in touch</p>
                                </div>
                            </div>
                        </div>
                        <div class="tg-contactusarea">
                            <div class="col-xs-12 col-sm-12 col-md-10 col-md-push-1 col-lg-10 col-lg-push-1">
                                <form class="tg-themeform" method="post" action="{{url('contactus')}}">
                                    <fieldset>
                                        <div class="row">
                                            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                                <div class="form-group">
                                                    <input type="text" name="name" class="form-control" placeholder="Your Full Name" required>
                                                </div>
                                            </div>
                                            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                                <div class="form-group">
                                                    <input type="number" name="phone" class="form-control" placeholder="Your Phone" required>
                                                </div>
                                            </div>
                                            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                                <div class="form-group">
                                                    <input type="email" name="email" class="form-control" placeholder="Your Email" required>
                                                </div>
                                            </div>
                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                <div class="form-group">
                                                    <textarea placeholder="Your Message" name="message" required></textarea>
                                                </div>
                                            </div>
                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                <button type="submit" class="tg-btn">Submit</button>
                                            </div>
                                        </div>
                                    </fieldset>
                                    @if (count($errors) > 0)
                                        <div class="alert alert-danger">
                                            <ul>
                                                @foreach ($errors->all() as $error)
                                                    <li>{{ $error }}</li>
                                                @endforeach
                                            </ul>
                                        </div>
                                    @endif
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            {{--</div>--}}

        </main>

    @endsection

@section('scripts')


    @stop