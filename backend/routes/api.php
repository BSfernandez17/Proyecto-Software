<?php
use App\Http\Controllers\APIS\ParticipanteController;
use App\Http\Controllers\APIS\TorneoController;
use App\Models\Participantes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(ParticipanteController::class)->group(function (){
Route::get('/participantes','index');
Route::post('/participante','store');
Route::get('/participante/{id}','show');
Route::put('/participante/{id}','update');
Route::delete('/participante/{id}','destroy');
Route::get('/participanteByTorneo/{torneoId}','getParticipanteByTorneo');
Route::get('/nombresByTorneo/{torneoId}','getNombresByTorneo');
});

Route::controller(TorneoController::class)->group(function(){
    Route::get('/torneo','index');
    Route::post('/torneo','store');
    Route::get('/torneo/{torneo_id}','show');
    Route::put('/torneo/{torneo_id}','update');
    Route::delete('/torneo/{torneo_id}','destroy');
    Route::get('/torneo/simular-torneo/{torneo_id}','generarBracket');

});