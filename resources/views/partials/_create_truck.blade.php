<form class="tg-formtheme tg-formsearch" method="post" action="{{url('postload')}}" onsubmit="post">
    <fieldset>
        <legend>Search Thousands of loads or trucks</legend>
        <div class="form-group">
            <input type="text" id="source" class="form-control" name="location" placeholder="Current Location">
            <div id="source_details">
                <input name="loc_state" id="administrative_area_level_1" type="hidden">
                <input name="loc_district" id="administrative_area_level_2"
                       type="hidden">
                <input name="loc_locality" id="locality" type="hidden">
                <input name="formatted_address" id="formatted_address" type="hidden">
            </div>
        </div>
        {{--<div class="form-group">--}}
            {{--<input type="text" name="destination" class="form-control" id="destination" placeholder="Destination">--}}
            {{--<div id="destination_details">--}}
                {{--<input type="hidden" name="destination_state" id="administrative_area_level_1">--}}
                {{--<input type="hidden" name="destination_district" id="administrative_area_level_2">--}}
                {{--<input type="hidden" name="destination_locality" id="locality">--}}
                {{--<input type="hidden" name="destination_formatted_address" id="formatted_address">--}}
            {{--</div>--}}
        {{--</div>--}}
        <div class="form-group">
            <input type="text"  class="form-control" id="trucknumber" name="truck_number" placeholder="Truck Number">
        </div>
        <div class="form-group">
            <select type="text" class="form-control" id="trucktype" name="truck_type" placeholder="Truck Type">
                <option></option>
                @foreach($models as $model)
                    <option value="{{ $model->id }}">{{ $model->name }}</option>
                @endforeach
            </select>
        </div>

        {{--<div class="form-group">--}}
            {{--<input type="text" name="material" id="material" class="form-control" placeholder="Material">--}}
        {{--</div>--}}

        {{--<div class="form-group">--}}
            {{--<input type="text" name="date" id="date" class="form-control" placeholder="Expected Date">--}}
        {{--</div>--}}
        <div class="form-group">
            <input type="text" name="drivername" id="drivername" class="form-control" placeholder="contact Name">
        </div>
        <div class="form-group">
            <input type="text" name="driverphone" id="driverphone" class="form-control" placeholder="contact Phone">
        </div>
        <input type="hidden" name="type" id="type" class="form-control" value="2">

        <div class="tg-btns">
            <button class="tg-btn" id="post" type="submit">Submit</button>
            {{--<button class="tg-btn" id="find" type="submit" formmethod="get" formaction="{{url('findload')}}" style="display:none">Search</button>--}}
            {{--<button class="tg-btn" type="reset">Reset All</button>--}}
        </div>
    </fieldset>
</form>