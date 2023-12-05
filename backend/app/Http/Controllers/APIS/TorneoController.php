<?php
namespace App\Http\Controllers\APIS;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Participante;
use App\Models\Torneo;

use function PHPUnit\Framework\countOf;

class TorneoController extends Controller
{
    private $participantes;

    public function index(){
        $torneos=Torneo::all();
        return $torneos;
    }
    public function store(request $request){
        $torneo=new Torneo();
        $torneo->nombre=$request->nombre;
        $torneo->fecha=$request->fecha;
        $torneo->save();
    }
    public function show($torneo_id){
        $torneo=Torneo::find($torneo_id);
        return $torneo;
    }
    public function update(Request $request,$torneo_id){
        $torneo=Torneo::findOrFail($torneo_id);
        $torneo->nombre=$request->nombre;
        $torneo->fecha=$request->fecha;
        $torneo->save();
        return $torneo;
    }
    public function destroy($torneo_id){
        $torneo=Torneo::destroy($torneo_id);
        return $torneo;
    }
    public function esPotenciaDeDos($numero)
    {
        return ($numero & ($numero - 1)) == 0;
    }

    public function calcularJornadas($numEquipos) {
     $nj=1;
     $n=2;
     while ($n<$numEquipos){
        $n*=2;
        $nj++;
     }
     return $nj;
    }
    public function simularEnfrentamiento($participante1, $participante2)
    {
        $ganador = rand(0, 1) == 0 ? $participante1 : $participante2;
        return $ganador;
    }
// ...

public function generarBracket($torneo_id)
{
    $participantes = Participante::where('torneo_id', $torneo_id)->pluck('nombre')->toArray();
    
    if (empty($participantes)) {
        die("No se encontraron participantes para este torneo.");
    }

    $this->participantes = $participantes;
    $numParticipantes = count($this->participantes);
    $numJornadas = $this->calcularJornadas($numParticipantes);
    $numByes = $numParticipantes - $numJornadas;
    $bracketPrincipal = $this->participantes;
    $enfrentamientosGanadores = [];

    if ($numParticipantes < 2) {
        die("Debe haber al menos 2 participantes.");
    }

    $ronda = 1;

    while ($ronda <= $numJornadas) {
        $numParticipantes = count($bracketPrincipal);
        $ganadoresRonda = [];

        for ($i = 0; $i < $numParticipantes; $i += 2) {
            $p1 = $bracketPrincipal[$i] ?? null;
            $p2 = $bracketPrincipal[$i + 1] ?? null;

            if ($p2 == null) {
                $ganador = $p1;
            } else {
                $ganador = $this->simularEnfrentamiento($p1, $p2);
            }

            $ganadoresRonda[] = $ganador;

            $enfrentamientosGanadores[] = [
                'Participante 1' => $p1,
                'Participante 2' => $p2,
                'GANADOR' => $ganador,
                'Ronda' => $ronda
            ];
        }

        $ronda++;
        $bracketPrincipal = $ganadoresRonda;
    }

    // El campeón estará en el último enfrentamiento del último array en $enfrentamientosGanadores
    $campeon = end($enfrentamientosGanadores)['GANADOR'];

;

    return [
        $enfrentamientosGanadores,
    ];
}

// ...

    
    
}
    ?>