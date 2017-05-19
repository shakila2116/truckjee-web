<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLoadMigration extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('load',function (Blueprint $table){
            $table->increments('id');
            $table->integer('truck_type')->unsigned();
            $table->text('source');
            $table->string('source_locality');
            $table->string('source_district');
            $table->string('source_state');
            $table->text('destination');
            $table->string('destination_locality');
            $table->string('destination_district');
            $table->string('destination_state');
            $table->dateTime('date_required');
            $table->text('material');
            $table->text('contactname');
            $table->text('contactphone');
            $table->tinyinteger('type');
            $table->timestamps();
            /*
             * post load=1
             * post truck =2
             * find load =3
             * find truck =4
             */
        });

        Schema::table('load',function ($table){
            $table->foreign('truck_type')->references('id')->on('truck_models');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfexists('load');
    }
}
