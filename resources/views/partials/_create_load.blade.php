<form class="tg-formtheme tg-formsearch" method="post" action="{{url('postload')}}" onsubmit="post">
    <fieldset>
        {{--<legend>Post your loads or trucks</legend>--}}

        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <input type="text" id="source" class="form-control" name="source" placeholder="Source" required>
                    <div id="source_details">
                        <input name="source_state" id="administrative_area_level_1" type="hidden">
                        <input name="source_district" id="administrative_area_level_2"
                               type="hidden">
                        <input name="source_locality" id="locality" type="hidden">
                        <input name="source_formatted_address" id="formatted_address" type="hidden">
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <input type="text" name="destination" class="form-control" id="destination" placeholder="Destination">
                    <div id="destination_details">
                        <input type="hidden" name="destination_state" id="administrative_area_level_1">
                        <input type="hidden" name="destination_district" id="administrative_area_level_2">
                        <input type="hidden" name="destination_locality" id="locality">
                        <input type="hidden" name="destination_formatted_address" id="formatted_address">
                    </div>
                </div>
                </div>
        </div>
            <div class="row">
                <div class="col-md-6">
                <div class="form-group">
                    <input type="text" name="drivername" id="drivername" class="form-control" placeholder="contact Name" required>
                </div>
                </div>
                <div class="col-md-6">
                <div class="form-group">
                    <input type="number" name="driverphone" id="driverphone" class="form-control" placeholder="contact Phone" required>
                </div>
                    </div>
            </div>

        <input type="hidden" name="type" id="type" class="form-control" value="1">
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <input type="text" name="material" id="material" class="form-control" placeholder="Material">
                </div>

            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <input type="text" name="date" id="date" class="form-control" placeholder="Expected Date">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <input type="text" id="truck_number" class="form-control" name="truck_number" placeholder="Truck Number">
                </div>
            </div>

            <div class="col-md-6">

                <div class="form-group" style="margin-bottom: 10px; height: 50px;">
                    <select type="text" class="form-control" id="trucktype" name="truck_type" placeholder="Type" required>
                        <option></option>
                        @foreach($models as $model)
                            <option value="{{ $model->id }}">{{ $model->name }}</option>
                        @endforeach
                    </select>
                </div>
            </div>
        </div>

        <div class="tg-btns">
            <button class="tg-btn" id="post" type="submit">Submit</button>
            {{--<button class="tg-btn" id="find" type="submit" formmethod="get" formaction="{{url('findload')}}" style="display:none">Search</button>--}}
            {{--<button class="tg-btn" type="reset">Reset All</button>--}}
        </div>
    </fieldset>
</form>