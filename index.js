/*
Semesterdagar med semesterlön

7 § Antalet semesterdagar med semesterlön beräknas på följande sätt. Från de dagar arbetstagaren har varit anställd hos arbetsgivaren under intjänandeåret (anställningstiden) subtraheras de dagar då arbetstagaren varit helt frånvarande från arbetet utan lön. Frånvaro som beror på semesterledighet, permittering eller ledighet som enligt 1717 b §§ är semesterlönegrundande, liksom arbetsfria dagar som infaller under sådana frånvaroperioder, ska dock räknas in i anställningstiden. Differensen divideras med antalet dagar under intjänandeåret. Kvoten multipliceras med tjugofem. Om ett brutet tal då uppstår, avrundas detta till närmast högre hela tal. Lag (2009:1439).
*/

function semesterdagar(intjänandeÅr, arbetadeDagar) {
	var dagarUnderIntjänandeår = ärSkottår(intjänandeÅr) ? 366 : 365
	return Math.ceil((arbetadeDagar / dagarUnderIntjänandeår) * 25)
}

function ärSkottår(år) {
	return new Date(år, 1, 29).getMonth() == 1
}

if (!module.parent) {
	var args = process.argv.slice(2)
	console.log(semesterdagar(parseInt(args.shift()), parseInt(args.shift())))
}