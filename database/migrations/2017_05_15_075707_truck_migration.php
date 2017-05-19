<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class TruckMigration extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('truck_models',function (Blueprint $table){
            $table->increments('id');
            $table->string('name')->unique();
            $table->timestamps();
        });

        Schema::create('truck_descriptions',function(Blueprint $table){
            $table->increments('id');
            $table->integer('model_id')->unsigned();
            $table->string('model_name');
            $table->string('manufacturer');
            $table->string('dimension');
            $table->string('max_capacity', 10);
            $table->string('wheels', 10);
            $table->string('type', 10);
            $table->string('axle', 10);
            $table->timestamps();
        });

        Schema::table('truck_descriptions',function($table){
           $table->foreign('model_id')->references('id')->on('truck_models');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('truck_models');
        Schema::dropIfExists('truck_descriptions');
    }
}
