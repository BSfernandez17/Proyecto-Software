<?php

namespace App\Http\Controllers\APIS;

use App\Http\Controllers\Controller;
use App\Models\Participante; // Importa el modelo Participantes correctamente
use Illuminate\Http\Request;

class ParticipanteController extends Controller
{
    public function index()
    {
        $participantes = Participante::all();
        return $participantes;
    }
    public function store(Request $request){
        $participante=new Participante();
        $participante->nombre=$request->nombre;
        $participante->torneo_id=$request->torneo_id;
        $participante->club_id=$request->club_id;
        $participante->save();
    }
    public function show(string $id){
        $participante=Participante::find($id);
        return $participante;
    }
    public function update(Request $request){
        $participante=Participante::findOrfail($request->id);
        $participante->nombre=$request->nombre;
        $participante->save();
        return $participante;
    }
    public function destroy (string $id){
        $participante=Participante::destroy($id);
        return $participante;
    }
    public function getParticipanteByTorneo($torneoId)
    {
        $participantes = Participante::where('torneo_id', $torneoId)->get();
        return $participantes;
    }
    public function getNombresByTorneo($torneoId)
    {
        $nombresParticipantes = Participante::where('torneo_id', $torneoId)
            ->pluck('nombre'); // Utiliza pluck para obtener solo los nombres
        return $nombresParticipantes;
    }
   
}