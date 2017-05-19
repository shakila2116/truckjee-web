<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostTruckMigration extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('post_truck',function (Blueprint $table){
            $table->increments('id');
            $table->string('truck_number')->unique();
            $table->integer('model_id')->unsigned();
            $table->string('formatted_address')->nullable();
            $table->string('locality')->nullable();
            $table->string('district')->nullable();
            $table->string('state')->nullable();
            $table->dateTime('date_required');
            $table->text('contactname');
            $table->text('contactphone');
            $table->timestamps();
        });
        Schema::table('post_truck',function ($table){
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
        Schema::dropIfExists('post_truck');
    }
}
