import { Make } from './../models/make';
import { Model } from './../models/model';

export const cars = [
  new Make(
    'alfa-romeo',
    'Alfa Romeo',
    '/assets/images/makes/Alfa-Romeo.svg',
    [
      new Model('33', '33'),
      new Model('75', '75'),
      new Model('90', '90'),
      new Model('145', '145'),
      new Model('146', '146'),
      new Model('147', '147'),
      new Model('155', '155'),
      new Model('156', '156'),
      new Model('159', '159'),
      new Model('164', '164'),
      new Model('166', '166'),
      new Model('8c', '8C'),
      new Model('sz', 'SZ'),
      new Model('RZ', 'RZ'),
      new Model('arna', 'Arna'),
      new Model('giulia', 'Giulia'),
      new Model('gt', 'GT'),
      new Model('gtz', 'GTZ'),
      new Model('spider', 'Spider'),
      new Model('mito', 'Mito'),
      new Model('giulietta', 'Giulietta')
    ]
  ),
  new Make(
    'aston-martin',
    'Aston Martin',
    '/assets/images/makes/Aston-Martin.svg',
    [
      new Model('cygnet', 'Cygnet'),
      new Model('db11', 'DB11'),
      new Model('db7', 'DB7'),
      new Model('db7-zagato', 'DB7 Zagato'),
      new Model('db9', 'DB9'),
      new Model('dbs', 'DBS'),
      new Model('lagonda', 'Lagonda'),
      new Model('one-77', 'One-77'),
      new Model('rapide', 'Rapide'),
      new Model('v8-vantage', 'V8 Vantage'),
      new Model('vanquish', 'Vanquish'),
      new Model('vantage', 'Vantage'),
      new Model('virage', 'Virage'),
      new Model('zagato', 'Zagato')
    ]
  ),
  new Make(
    'audi',
    'Audi',
    '/assets/images/makes/Audi.svg',
    [
      new Model('80','80'),
      new Model('90','90'),
      new Model('100','100'),
      new Model('200','200'),
      new Model('a1','A1'),
      new Model('a2','A2'),
      new Model('a3','A3'),
      new Model('a3-e-tron','A3 e-tron'),
      new Model('a4','A4'),
      new Model('a4-allroad','A4-Allroad'),
      new Model('a5','A5'),
      new Model('a6','A6'),
      new Model('a7','A7'),
      new Model('a8','A8'),
      new Model('q3','Q3'),
      new Model('q5','Q5'),
      new Model('q5-hybrid','Q5 Hybrid'),
      new Model('q7','Q7'),
      new Model('q7-e-tron','Q7 e-tron'),
      new Model('r8','R8'),
      new Model('rs1','RS1'),
      new Model('rs2','RS2'),
      new Model('rs3','RS3'),
      new Model('rs4', 'RS4'),
      new Model('rs5', 'RS5'),
      new Model('rs6', 'RS6'),
      new Model('rs7', 'RS7'),
      new Model('s1', 'S1'),
      new Model('s2', 'S2'),
      new Model('s3', 'S3'),
      new Model('s4', 'S4'),
      new Model('s5', 'S5'),
      new Model('s6', 'S6'),
      new Model('s7', 'S7'),
      new Model('s8', 'S8'),
      new Model('tt', 'TT')
    ]
  ),
  new Make(
    'bentley',
    'Bentley',
    '/assets/images/makes/Bentley.svg',
    [
      new Model('arnage', 'Arnage'),
      new Model('azure', 'Azure'),
      new Model('brooklands', 'Brooklands'),
      new Model('bentayga', 'Bentayga'),
      new Model('continental', 'Continental'),
      new Model('flying Spur', 'Flying Spur'),
      new Model('mulsanne', 'Mulsanne'),
      new Model('supersport', 'Supersport'),
      new Model('turbo R', 'Turbo R')
    ]
  ),
  new Make(
    'bmw',
    'BMW',
    '/assets/images/makes/BMW.svg',
    [
      new Model('1 series', '1 series'),
      new Model('2 series', '2 series'),
      new Model('3 series', '3 series'),
      new Model('4 series', '4 series'),
      new Model('5 series', '5 series'),
      new Model('6 series', '6 series'),
      new Model('7 series', '7 series'),
      new Model('8 series', '8 series'),
      new Model('i3', 'i3'),
      new Model('i8', 'i8'),
      new Model('m1', 'M1'),
      new Model('m2', 'M2'),
      new Model('m3', 'M3'),
      new Model('m4', 'M4'),
      new Model('m5', 'M5'),
      new Model('m6', 'M6'),
      new Model('m7', 'M7'),
      new Model('m8', 'M8'),
      new Model('x1', 'X1'),
      new Model('x3', 'X3'),
      new Model('x4', 'X4'),
      new Model('x5', 'X5'),
      new Model('x6', 'X6'),
      new Model('z3', 'Z3'),
      new Model('z4', 'Z4'),
      new Model('z8', 'Z8')
    ]
  ),
  new Make(
    'buick',
    'Buick',
    '/assets/images/makes/Buick.svg',
    [
      new Model('cascada', 'Cascada'),
      new Model('century', 'Century'),
      new Model('enclave', 'Enclave'),
      new Model('encore', 'Encore'),
      new Model('Envision', 'Envision'),
      new Model('excelle', 'Excelle'),
      new Model('gl8', 'GL8'),
      new Model('Lacrosse', 'Lacrosse'),
      new Model('lesabre', 'Lesabre'),
      new Model('lucerne', 'Lucerne'),
      new Model('Park avenue', 'Park Avenue'),
      new Model('rainier', 'Rainier'),
      new Model('regal', 'Regal'),
      new Model('Rendezvous', 'Rendezvous'),
      new Model('riviera', 'Riviera'),
      new Model('Roadmaster', 'Roadmaster'),
      new Model('skylark', 'Skylark'),
      new Model('terraza', 'Terraza'),
      new Model('verano', 'Verano')
    ]
  ),
  new Make(
    'cadilac',
    'Cadilac',
    '/assets/images/makes/Cadilac.svg',
    [
      new Model('allante', 'Allante'),
      new Model('ats', 'ATS'),
      new Model('bls', 'BLS'),
      new Model('brougham', 'Brougham'),
      new Model('catera', 'Catera'),
      new Model('cts', 'CTS'),
      new Model('deville', 'Deville'),
      new Model('dts', 'DTS'),
      new Model('eldorado', 'Eldorado'),
      new Model('elr', 'ELR'),
      new Model('escalade', 'Escalade'),
      new Model('evoq', 'Evoq'),
      new Model('fleetwood', 'Fleetwood'),
      new Model('seville', 'Seville'),
      new Model('srx', 'SRX'),
      new Model('sts', 'STS'),
      new Model('xlr', 'XLR'),
      new Model('xt5', 'XT5')
    ]
  ),
  new Make(
    'chery',
    'Chery',
    '/assets/images/makes/Chery.svg',
    [

    ]
  ),
  new Make(
    'chevrolet',
    'Chevrolet',
    '/assets/images/makes/Chevrolet.svg',
    [
      new Model('astro', 'Astro'),
      new Model('avalanche', 'Avalanche'),
      new Model('aveo', 'Aveo'),
      new Model('bolt-ev', 'Bolt-EV'),
      new Model('camaro', 'Camaro'),
      new Model('ss-sedan', 'SS Sedan'),
      new Model('caprice', 'Caprice'),
      new Model('captiva', 'Captiva'),
      new Model('cavalier', 'Cavalier'),
      new Model('city-express', 'City Express'),
      new Model('classic', 'Classic'),
      new Model('cobalt', 'Cobalt'),
      new Model('colorado', 'Colorado'),
      new Model('corvette', 'Corvette'),
      new Model('cruze', 'Cruze'),
      new Model('d-max', 'D-Max'),
      new Model('epica', 'Epica'),
      new Model('equinox', 'Equinox'),
      new Model('explorer', 'Explorer'),
      new Model('express', 'Express'),
      new Model('impala', 'Impala'),
      new Model('low-cab-forward', 'Low Cab Forward'),
      new Model('lumina', 'Lumina'),
      new Model('malibu', 'Malibu'),
      new Model('optra', 'Optra'),
      new Model('silverado', 'Silverado'),
      new Model('sonic', 'Sonic'),
      new Model('spark', 'Spark'),
      new Model('ssr', 'SSR'),
      new Model('suburban', 'Suburban'),
      new Model('tahoe', 'Tahoe'),
      new Model('tracker', 'Tracker'),
      new Model('trailblazer', 'Trailblazer'),
      new Model('traverse', 'Traverse'),
      new Model('trax', 'Trax'),
      new Model('uplander', 'Uplander'),
      new Model('volt', 'Volt')
    ]
  ),
  new Make(
    'chrysler',
    'Chrysler',
    '/assets/images/makes/Chrysler.svg',
    [
      new Model('200', '200'),
      new Model('300', '300'),
      new Model('300m', '300m'),
      new Model('aspen', 'Aspen'),
      new Model('cirrus', 'Cirrus'),
      new Model('concorde', 'Concorde'),
      new Model('crossfire', 'Crossfire'),
      new Model('fifth-avenue', 'Fifth Avenue'),
      new Model('grand-voyager', 'Grand Voyager'),
      new Model('lebaron', 'Lebaron'),
      new Model('lhs', 'LHS'),
      new Model('new-yorker', 'New Yorker'),
      new Model('neon', 'Neon'),
      new Model('pacifica', 'Pacifica'),
      new Model('prowler', 'Prowler'),
      new Model('pt-cruiser', 'Pt Cruiser'),
      new Model('sebring', 'Sebring'),
      new Model('town-and-country', 'Town and Country'),
      new Model('vision', 'Vision')
    ]
  ),
  new Make(
    'citroen',
    'Citroen',
    '/assets/images/makes/Citroen.svg',
    []
  ),
  new Make(
    'daewoo',
    'Daewoo',
    '/assets/images/makes/Daewoo.svg',
    [

    ]
  ),
  new Make(
    'daihatsu',
    'Daihatsu',
    '/assets/images/makes/Daihatsu.svg',
    [

    ]
  ),
  new Make(
    'dodge',
    'Dodge',
    '/assets/images/makes/Dodge.svg',
    [
      new Model('avenger', 'Avenger'),
      new Model('caliber', 'Caliber'),
      new Model('caravan', 'Caravan'),
      new Model('challenger', 'Challenger'),
      new Model('charger', 'Charger'),
      new Model('dakota', 'Dakota'),
      new Model('dart', 'Dart'),
      new Model('durango', 'Durango'),
      new Model('journey', 'Journey'),
      new Model('magnum', 'Magnum'),
      new Model('neon', 'Neon'),
      new Model('nitro', 'Nitro'),
      new Model('ram', 'Ram'),
      new Model('stratus', 'Stratus'),
      new Model('viper', 'Viper')
    ]
  ),
  new Make(
    'ferrari',
    'Ferrari',
    '/assets/images/makes/Ferrari.svg',
    [
      new Model('355', '355'),
      new Model('360', '360'),
      new Model('456', '456'),
      new Model('458', '458'),
      new Model('488', '488'),
      new Model('512', '512'),
      new Model('599', '599'),
      new Model('812', '812'),
      new Model('california', 'California'),
      new Model('california-t', 'California T'),
      new Model('enzo', 'Enzo'),
      new Model('f12', 'F12'),
      new Model('f40', 'F40'),
      new Model('f430', 'F430'),
      new Model('f430-spider', 'F430 Spider'),
      new Model('f50', 'F50'),
      new Model('ff', 'FF'),
      new Model('gtc4-lusso', 'Gtc4 Lusso'),
      new Model('laferrari', 'Laferrari'),
      new Model('maranello', 'Maranello'),
      new Model('scaglietti', 'Scaglietti'),
      new Model('superamerica', 'Superamerica'),
      new Model('testarossa', 'Testarossa')
    ]
  ),
  new Make(
    'fiat',
    'Fiat',
    '/assets/images/makes/Fiat.svg',
    [
      new Model('124 spider', '124 Spider'),
      new Model('500', '500'),
      new Model('500e', '500e'),
      new Model('500l', '500L'),
      new Model('500x', '500X'),
      new Model('albea', 'Albea'),
      new Model('argenta', 'Argenta'),
      new Model('barchetta', 'Barchetta'),
      new Model('brava', 'Brava'),
      new Model('bravo', 'Bravo'),
      new Model('cinquecento', 'Cinquecento'),
      new Model('croma', 'Croma'),
      new Model('doblo', 'Doblo'),
      new Model('dukato', 'Dukato'),
      new Model('duna', 'Duna'),
      new Model('fiorino', 'Fiorino'),
      new Model('florida', 'Florida'),
      new Model('idea', 'Idea'),
      new Model('linea', 'Linea'),
      new Model('marea', 'Marea'),
      new Model('palio', 'Palio'),
      new Model('panda', 'Panda'),
      new Model('petra', 'Petra'),
      new Model('punto', 'Punto'),
      new Model('qubo', 'Qubo'),
      new Model('regata', 'Regata'),
      new Model('sedici', 'Sedici'),
      new Model('siena', 'Siena'),
      new Model('stilo', 'Stilo'),
      new Model('strada', 'Strada'),
      new Model('tempra', 'Tempra'),
      new Model('tipo', 'Tipo'),
      new Model('ulysse', 'Ulysse'),
      new Model('uno', 'Uno')
    ]
  ),
  new Make(
    'ford',
    'Ford',
    '/assets/images/makes/Ford.svg',
    [
      new Model('aerostar', 'Aerostar'),
      new Model('aspire', 'Aspire'),
      new Model('bronco', 'Bronco'),
      new Model('c-max', 'C-Max'),
      new Model('contour', 'Contour'),
      new Model('cougar', 'Cougar'),
      new Model('crown-victoria', 'Crown Victoria'),
      new Model('ecosport', 'EcoSport'),
      new Model('econoline', 'Econoline'),
      new Model('econovan', 'Econovan'),
      new Model('edge', 'Edge'),
      new Model('escape', 'Escape'),
      new Model('everest', 'Everest'),
      new Model('Excursion', 'Excursion'),
      new Model('Expedition', 'Expedition'),
      new Model('explorer', 'Explorer'),
      new Model('f-150', 'F-150'),
      new Model('f-250', 'F-250'),
      new Model('f-350', 'F-350'),
      new Model('flex', 'Flex'),
      new Model('fiesta', 'Fiesta'),
      new Model('figo', 'Figo'),
      new Model('focus', 'Focus'),
      new Model('freestar', 'Freestar'),
      new Model('Freestyle', 'Freestyle'),
      new Model('fusion', 'Fusion'),
      new Model('galaxy', 'Galaxy'),
      new Model('ka', 'Ka'),
      new Model('kuga', 'Kuga'),
      new Model('mondeo', 'Mondeo'),
      new Model('mustang', 'Mustang'),
      new Model('puma', 'Puma'),
      new Model('ranger', 'Ranger'),
      new Model('raptor', 'Raptor'),
      new Model('s-max', 'S-Max'),
      new Model('sport-truck', 'Sport Truck'),
      new Model('superduty', 'Superduty'),
      new Model('taurus', 'Taurus'),
      new Model('tourneo', 'Tourneo'),
      new Model('transit-connect', 'Transit Connect'),
      new Model('transit', 'Transit'),
      new Model('windstar', 'Windstar')
    ]
  ),
  new Make(
    'geely',
    'Geely',
    '/assets/images/makes/Geely.svg',
    [

    ]
  ),
  new Make(
    'genesis',
    'Genesis',
    '/assets/images/makes/Genesis.svg',
    [

    ]
  ),
  new Make(
    'gmc',
    'GMC',
    '/assets/images/makes/GMC.svg',
    [
      new Model('acadia', 'Acadia'),
      new Model('canyon', 'Canyon'),
      new Model('envoy', 'Envoy'),
      new Model('jimmy', 'Jimmy'),
      new Model('safari', 'Safari'),
      new Model('savana', 'Savana'),
      new Model('sierra', 'Sierra'),
      new Model('suburban', 'Suburban'),
      new Model('terrain', 'Terrain'),
      new Model('vandura', 'Vandura'),
      new Model('yukon', 'Yukon'),
      new Model('yukon-xl', 'Yukon XL')
    ]
  ),
  new Make(
    'great-wall',
    'Great Wall',
    '/assets/images/makes/Great-Wall.svg',
    [

    ]
  ),
  new Make(
    'hino',
    'Hino',
    '/assets/images/makes/Hino.svg',
    [

    ]
  ),
  new Make(
    'honda',
    'Honda',
    '/assets/images/makes/Honda.svg',
    [
      new Model('accord', 'Accord'),
      new Model('accord-hybrid', 'Accord Hybrid'),
      new Model('airwave', 'Airwave'),
      new Model('avancier', 'Avancier'),
      new Model('city', 'City'),
      new Model('civic', 'Civic'),
      new Model('clarity-electric', 'Clarity Electric'),
      new Model('clarity-fuel-cell', 'Clarity Fuel Cell'),
      new Model('concerto', 'Concerto'),
      new Model('cr-v', 'CR-V'),
      new Model('cr-x', 'CR-X'),
      new Model('crosstour', 'Crosstour'),
      new Model('edix', 'Edix'),
      new Model('element', 'Element'),
      new Model('elysion', 'Elysion'),
      new Model('fcx-clarity', 'FCX Clarity'),
      new Model('fit', 'Fit'),
      new Model('fit-ev', 'Fit EV'),
      new Model('hr-v', 'HR-V'),
      new Model('insight', 'Insight'),
      new Model('integra', 'Integra'),
      new Model('jazz', 'Jazz'),
      new Model('mdx', 'MDX'),
      new Model('mr-v', 'MR-V'),
      new Model('nsx', 'NSX'),
      new Model('odyssey', 'Odyssey'),
      new Model('pilot', 'Pilot'),
      new Model('prelude', 'Prelude'),
      new Model('quintet', 'Quintet'),
      new Model('ridgeline', 'Ridgeline'),
      new Model('rv-r', 'RV-R'),
      new Model('s2000', 'S2000'),
      new Model('shuttle', 'Shuttle'),
      new Model('smx', 'SMX'),
      new Model('vamos', 'Vamos'),
      new Model('vigor', 'Vigor')
    ]
  ),
  new Make(
    'hummer',
    'Hummer',
    '/assets/images/makes/Hummer.svg',
    [

    ]
  ),
  new Make(
    'hyundai',
    'Hyundai',
    '/assets/images/makes/Hyundai.svg',
    [
      new Model('accent', 'Accent'),
      new Model('aero-city', 'Aero City'),
      new Model('aero-town', 'Aero Town'),
      new Model('atos', 'Atos'),
      new Model('avante', 'Avante'),
      new Model('azera', 'Azera'),
      new Model('cargo', 'Cargo'),
      new Model('Centennial', 'Centennial'),
      new Model('county', 'County'),
      new Model('creta', 'Creta'),
      new Model('dump', 'Dump'),
      new Model('elantra', 'Elantra'),
      new Model('entourage', 'Entourage'),
      new Model('equus', 'Equus'),
      new Model('excel', 'Excel'),
      new Model('galloper', 'Galloper'),
      new Model('genesis', 'Genesis'),
      new Model('genesis-coupe', 'Genesis Coupe'),
      new Model('getz', 'Getz'),
      new Model('grand-i10', 'Grand i10'),
      new Model('grandeur', 'Grandeur'),
      new Model('h-1', 'H-1'),
      new Model('h100', 'H100'),
      new Model('hd120', 'HD120'),
      new Model('hd210', 'HD210'),
      new Model('hd65', 'HD65'),
      new Model('hd72', 'HD72'),
      new Model('i10', 'i10'),
      new Model('i20', 'i20'),
      new Model('i30', 'i30'),
      new Model('ioniq', 'Ioniq'),
      new Model('lavita', 'Lavita'),
      new Model('matrix', 'Matrix'),
      new Model('mighty', 'Mighty'),
      new Model('mixer', 'Mixer'),
      new Model('porter', 'Porter'),
      new Model('santa-fe', 'Santa Fe'),
      new Model('santamo', 'Santamo'),
      new Model('solaris', 'Solaris'),
      new Model('sonata', 'Sonata'),
      new Model('sonata-hybrid', 'Sonata Hybrid'),
      new Model('terracan', 'Terracan'),
      new Model('tiburon', 'Tiburon'),
      new Model('tractor', 'Tractor'),
      new Model('trajet', 'Trajet'),
      new Model('tucson', 'Tucson'),
      new Model('tuscani', 'Tuscani'),
      new Model('universe', 'Universe'),
      new Model('veloster', 'Veloster'),
      new Model('veracruz', 'Veracruz'),
      new Model('verna', 'Verna'),
      new Model('xcient', 'Xcient'),
      new Model('xg', 'XG')
    ]
  ),
  new Make(
    'infinity',
    'Infinity',
    '/assets/images/makes/Infinity.svg',
    [
      new Model('e30', 'E30'),
      new Model('ex-series', 'EX-Series'),
      new Model('fx-series', 'FX-Series'),
      new Model('g-series', 'G-Series'),
      new Model('i-series', 'I-Series'),
      new Model('j30', 'J30'),
      new Model('jx-series', 'JX-Series'),
      new Model('m-series', 'M-series'),
      new Model('q30', 'Q30'),
      new Model('q45', 'Q45'),
      new Model('q50', 'Q50'),
      new Model('q60', 'Q60'),
      new Model('q70', 'Q70'),
      new Model('qx30', 'QX30'),
      new Model('qx50', 'QX50'),
      new Model('qx60', 'QX60'),
      new Model('qx70', 'QX70'),
      new Model('qx80', 'QX80')
    ]
  ),
  new Make(
    'isuzu',
    'Isuzu',
    '/assets/images/makes/Isuzu.svg',
    [

    ]
  ),
  new Make(
    'jaguar',
    'Jaguar',
    '/assets/images/makes/Jaguar.svg',
    [
      new Model('e-pace', 'E-Pace'),
      new Model('e-type', 'E-Type'),
      new Model('f-pace', 'F-Pace'),
      new Model('f-type', 'F-Type'),
      new Model('s-type', 'S-Type'),
      new Model('x-type', 'X-Type'),
      new Model('xe', 'XE'),
      new Model('xf', 'XF'),
      new Model('xj', 'XJ'),
      new Model('xk', 'XK')
    ]
  ),
  new Make(
    'jeep',
    'Jeep',
    '/assets/images/makes/Jeep.svg',
    [
      new Model('cherokee', 'Cherokee'),
      new Model('comanche', 'Comanche'),
      new Model('commander', 'Commander'),
      new Model('compass', 'Compass'),
      new Model('grand-cherokee', 'Grand Cherokee'),
      new Model('liberty', 'Liberty'),
      new Model('patriot', 'Patriot'),
      new Model('renegade', 'Renegade'),
      new Model('wrangler', 'Wrangler'),
      new Model('wrangler-unlimited', 'Wrangler Unlimited')
    ]
  ),
  new Make(
    'kia',
    'Kia',
    '/assets/images/makes/Kia.svg',
    [
      new Model('avella', 'Avella'),
      new Model('besta', 'Besta'),
      new Model('bongo', 'Bongo'),
      new Model('borrego', 'Borrego'),
      new Model('cadenza', 'Cadenza'),
      new Model('capital', 'Capital'),
      new Model('carens', 'Carens'),
      new Model('carnival', 'Carnival'),
      new Model('ceed', 'Ceed'),
      new Model('cerato', 'Cerato'),
      new Model('clarus', 'Clarus'),
      new Model('concord', 'Concord'),
      new Model('cosmos', 'Cosmos'),
      new Model('elan', 'Elan'),
      new Model('enterprise', 'Enterprise'),
      new Model('forte', 'Forte'),
      new Model('forte-5', 'Forte 5'),
      new Model('forte-hybrid', 'Forte Hybrid'),
      new Model('granbird', 'Granbird'),
      new Model('joice', 'Joice'),
      new Model('k2700', 'K2700'),
      new Model('k3000', 'K3000'),
      new Model('k900', 'K900'),
      new Model('koup', 'Koup'),
      new Model('magentis', 'Magentis'),
      new Model('mohave', 'Mohave'),
      new Model('niro', 'Niro'),
      new Model('opirus', 'Opirus'),
      new Model('optima', 'Optima'),
      new Model('optima-hybrid', 'Optima Hybrid'),
      new Model('picanto', 'Picanto'),
      new Model('potentia', 'Potentia'),
      new Model('pride', 'Pride'),
      new Model('quoris', 'Quoris'),
      new Model('retona', 'Retona'),
      new Model('rio', 'Rio'),
      new Model('saipa', 'Saipa'),
      new Model('sedona', 'Sedona'),
      new Model('sephia', 'Sephia'),
      new Model('shuma', 'Shuma'),
      new Model('sienna', 'Sienna'),
      new Model('sorento', 'Sorento'),
      new Model('soul', 'Soul'),
      new Model('soul-ev', 'Soul EV'),
      new Model('spectra', 'Spectra'),
      new Model('sportage', 'Sportage'),
      new Model('stinger', 'Stinger'),
      new Model('venga', 'Venga'),
      new Model('x-trek', 'X-Trek')
    ]
  ),
  new Make(
    'lada',
    'Lada',
    '/assets/images/makes/Lada.svg',
    [

    ]
  ),
  new Make(
    'lamborghini',
    'Lamborghini',
    '/assets/images/makes/Lamborghini.svg',
    [

    ]
  ),
  new Make(
    'lancia',
    'Lancia',
    '/assets/images/makes/Lancia.svg',
    [

    ]
  ),
  new Make(
    'land-rover',
    'Land-Rover',
    '/assets/images/makes/Land-Rover.svg',
    [
      new Model('defender', 'Defender'),
      new Model('discovery', 'Discovery'),
      new Model('discovery-sport', 'Discovery Sport'),
      new Model('evoque', 'Evoque'),
      new Model('freelander', 'Freelander'),
      new Model('hse', 'HSE'),
      new Model('lr2', 'LR2'),
      new Model('lr3', 'LR3'),
      new Model('lr4', 'LR4'),
      new Model('range-rover', 'Range Rover'),
      new Model('range-rover-sport', 'Range Rover Sport'),
      new Model('range-rover-velar', 'Range Rover Velar')
    ]
  ),
  new Make(
    'lexus',
    'Lexus',
    '/assets/images/makes/Lexus.svg',
    [
      new Model('ct', 'CT'),
      new Model('es', 'ES'),
      new Model('es-hybrid', 'ES Hybrid'),
      new Model('gs', 'GS'),
      new Model('gs-hybrid', 'GS Hybrid'),
      new Model('gx', 'GX'),
      new Model('hs', 'HS'),
      new Model('is', 'IS'),
      new Model('is-c', 'IS-C'),
      new Model('is-f', 'IS-F'),
      new Model('lc', 'LC'),
      new Model('lc-hybrid', 'LC Hybrid'),
      new Model('lfa', 'LFA'),
      new Model('ls', 'LS'),
      new Model('lx', 'LX'),
      new Model('nx', 'NX'),
      new Model('nx-hybrid', 'NX Hybrid'),
      new Model('rc', 'RC'),
      new Model('rc f', 'RC F'),
      new Model('rx', 'RX'),
      new Model('rx-hybrid', 'RX Hybrid'),
      new Model('sc', 'SC')
    ]
  ),
  new Make(
    'lincoln',
    'Lincoln',
    '/assets/images/makes/Lincoln.svg',
    [
      new Model('aviator', 'Aviator'),
      new Model('continental', 'Continental'),
      new Model('ls', 'LS'),
      new Model('mark-lt', 'Mark LT'),
      new Model('mkc', 'MKC'),
      new Model('mks', 'MKS'),
      new Model('mkt', 'MKT'),
      new Model('mkx', 'MKX'),
      new Model('mkz', 'MKZ'),
      new Model('navigator', 'Navigator'),
      new Model('town-car', 'Town Car'),
      new Model('zephyr', 'Zephyr')
    ]
  ),
  new Make(
    'maserati',
    'Maserati',
    '/assets/images/makes/Maserati.svg',
    [
      new Model('4200', '4200'),
      new Model('ghibli', 'Ghibli'),
      new Model('grancabrio', 'Grancabrio'),
      new Model('gransport', 'Gransport'),
      new Model('granturismo', 'Granturismo'),
      new Model('levante', 'Levante'),
      new Model('mc12', 'MC12'),
      new Model('quattroporte', 'Quattroporte'),
      new Model('spyder', 'Spyder')
    ]
  ),
  new Make(
    'mazda',
    'Mazda',
    '/assets/images/makes/Mazda.svg',
    [
      new Model('121', '121'),
      new Model('323', '323'),
      new Model('616', '616'),
      new Model('808', '808'),
      new Model('818', '818'),
      new Model('929', '929'),
      new Model('1000', '1000'),
      new Model('1300', '1300'),
      new Model('biante', 'Biante'),
      new Model('bongo', 'Bongo'),
      new Model('bt-50', 'BT-50'),
      new Model('cx-3', 'CX-3'),
      new Model('cx-5', 'CX-5'),
      new Model('cx-7', 'CX-7'),
      new Model('cx-9', 'CX-9'),
      new Model('demio', 'Demio'),
      new Model('mazda-2', 'Mazda 2'),
      new Model('mazda-3', 'Mazda 3'),
      new Model('mazda-5', 'Mazda 5'),
      new Model('mazda-6', 'Mazda 6'),
      new Model('mpv', 'MPV'),
      new Model('mx-3', 'MX-3'),
      new Model('mx-5', 'MX-5'),
      new Model('mx-6', 'MX-6'),
      new Model('navajo', 'Navajo'),
      new Model('premacy', 'Premacy'),
      new Model('proceed', 'Proceed'),
      new Model('protege', 'Protege'),
      new Model('protege-5', 'Protege 5'),
      new Model('rx-7', 'RX-7'),
      new Model('rx-8', 'RX-8')
    ]
  ),
  new Make(
    'mercedes',
    'Mercedes',
    '/assets/images/makes/Mercedes.svg',
    [
      new Model('190', '190'),
      new Model('240', '240'),
      new Model('260', '260'),
      new Model('280', '280'),
      new Model('300', '300'),
      new Model('350', '350'),
      new Model('380', '380'),
      new Model('400', '400'),
      new Model('420', '420'),
      new Model('500', '500'),
      new Model('560', '560'),
      new Model('a-class', 'A-Class'),
      new Model('accelo', 'Accelo'),
      new Model('actros', 'Actros'),
      new Model('arocs', 'Arocs'),
      new Model('atego', 'Atego'),
      new Model('axor', 'Axor'),
      new Model('b-class', 'B-Class'),
      new Model('c-class', 'C-Class'),
      new Model('c-class-hybrid', 'C-Class Hybrid'),
      new Model('citan', 'Citan'),
      new Model('citaro', 'Citaro'),
      new Model('cl-class', 'CL-Class'),
      new Model('cla', 'CLA'),
      new Model('clc', 'CLC'),
      new Model('clk', 'CLK'),
      new Model('cls', 'CLS'),
      new Model('conecto', 'Conecto'),
      new Model('e-class', 'E-Class'),
      new Model('e-class-hybrid', 'E-Class Hybrid'),
      new Model('g-class', 'G-Class'),
      new Model('gl-class', 'GL-Class'),
      new Model('gla', 'GLA'),
      new Model('glc', 'GLC'),
      new Model('gle', 'GLE'),
      new Model('glk', 'GLK'),
      new Model('gls', 'GLS'),
      new Model('gt', 'GT'),
      new Model('m-class', 'M-CLass'),
      new Model('maybach', 'Maybach'),
      new Model('mb', 'MB'),
      new Model('r-class', 'R-Class'),
      new Model('s-class', 'S-Class'),
      new Model('s-class-hybrid', 'S-Class Hybrid'),
      new Model('sl-class', 'SL-Class'),
      new Model('slc', 'SLC'),
      new Model('slk', 'SLK'),
      new Model('slr', 'SLR'),
      new Model('sls', 'SLS'),
      new Model('sprinter', 'Sprinter'),
      new Model('t1', 'T1'),
      new Model('tourismo', 'Tourismo'),
      new Model('travego', 'Travego'),
      new Model('v-class', 'V-Class'),
      new Model('vaneo', 'Vaneo'),
      new Model('viano', 'Viano'),
      new Model('vito', 'Vito'),
      new Model('x-class', 'X-Class'),
      new Model('zetros', 'Zetros')
    ]
  ),
  new Make(
    'mercury',
    'Mercury',
    '/assets/images/makes/Mercury.svg',
    [

    ]
  ),
  new Make(
    'mini',
    'Mini',
    '/assets/images/makes/Mini.svg',
    [
      new Model('clubman', 'Clubman'),
      new Model('cooper', 'Cooper'),
      new Model('countryman', 'Countryman'),
      new Model('coupe', 'Coupe'),
      new Model('paceman', 'Paceman'),
      new Model('roadster', 'Roadster')
    ]
  ),
  new Make(
    'mitsubishi',
    'Mitsubishi',
    '/assets/images/makes/Mitsubishi.svg',
    [
      new Model('3000gt', '3000GT'),
      new Model('aero-ace', 'Aero Ace'),
      new Model('aero-midi', 'Aero Midi'),
      new Model('aero-queen', 'Aero Queen'),
      new Model('aero-star', 'Aero Star'),
      new Model('airtrek', 'Airtrek'),
      new Model('ask', 'ASK'),
      new Model('attrage', 'Attrage'),
      new Model('canter', 'Canter'),
      new Model('canter-ex', 'Canter EX'),
      new Model('canter-guts', 'Canter Guts'),
      new Model('challenger', 'Challenger'),
      new Model('chariot', 'Chariot'),
      new Model('colt', 'Colt'),
      new Model('delica', 'Delica'),
      new Model('diamante', 'Diamante'),
      new Model('dignity', 'Dignity'),
      new Model('eclipse', 'Eclipse'),
      new Model('ek-wagon', 'Ek Wagon'),
      new Model('endeavor', 'Endeavor'),
      new Model('evolution', 'Evolution'),
      new Model('expo', 'Expo'),
      new Model('fighter', 'Fighter'),
      new Model('fto', 'FTO'),
      new Model('galant', 'Galant'),
      new Model('grandis', 'Grandis'),
      new Model('i-miev', 'I Miev'),
      new Model('l200', 'L200'),
      new Model('lancer', 'Lancer'),
      new Model('magna', 'Magna'),
      new Model('mirage', 'Mirage'),
      new Model('montero', 'Montero'),
      new Model('nativa', 'Nativa'),
      new Model('outlander', 'Outlander'),
      new Model('pajero', 'Pajero'),
      new Model('pajero-io', 'Pajero iO'),
      new Model('pajero-sport', 'Pajero Sport'),
      new Model('proudia', 'Proudia'),
      new Model('rosa', 'Rosa'),
      new Model('rvr', 'RVR'),
      new Model('town-box', 'Town Box')
    ]
  ),
  new Make(
    'nissan',
    'Nissan',
    '/assets/images/makes/Nissan.svg',
    [
      new Model('300zx', '300ZX'),
      new Model('350z', '350Z'),
      new Model('370z', '370Z'),
      new Model('altima', 'Altima'),
      new Model('altima-hybrid', 'Altima Hybrid'),
      new Model('armada', 'Armada'),
      new Model('frontier', 'Frontier'),
      new Model('gloria', 'Gloria'),
      new Model('gt-r', 'GT-R'),
      new Model('juke', 'Juke'),
      new Model('kicks', 'Kicks'),
      new Model('leaf', 'Leaf'),
      new Model('maxima', 'Maxima'),
      new Model('micra', 'Micra'),
      new Model('murano', 'Murano'),
      new Model('navara', 'Navara'),
      new Model('np-300', 'NP 300'),
      new Model('nv350', 'NV350'),
      new Model('pathfinder', 'Pathfinder'),
      new Model('pathfinder-hybrid"', 'Pathfinder Hybrid"'),
      new Model('patrol', 'Patrol'),
      new Model('primera', 'Primera'),
      new Model('qashqai', 'Qashqai'),
      new Model('s130', 'S130'),
      new Model('sentra', 'Sentra'),
      new Model('silvia', 'Silvia'),
      new Model('skyline', 'Skyline'),
      new Model('sunny', 'Sunny'),
      new Model('terrano', 'Terrano'),
      new Model('tida', 'Tida'),
      new Model('titan', 'Titan'),
      new Model('x-trail', 'X-Trail'),
      new Model('x-trail-hybrid', 'X-Trail Hybrid'),
      new Model('xterra', 'Xterra')
    ]
  ),
  new Make(
    'Opel',
    'Opel',
    '/assets/images/makes/Opel.svg',
    [

    ]
  ),
  new Make(
    'Peugeot',
    'Peugeot',
    '/assets/images/makes/Peugeot.svg',
    [

    ]
  ),
  new Make(
    'porsche',
    'Porsche',
    '/assets/images/makes/Porsche.svg',
    [
      new Model('718', '718'),
      new Model('911', '911'),
      new Model('944', '944'),
      new Model('968', '968'),
      new Model('918-spyder', '918 Spyder'),
      new Model('boxster', 'Boxster'),
      new Model('cayenne', 'Cayenne'),
      new Model('cayman', 'Cayman'),
      new Model('macan', 'Macan'),
      new Model('panamera', 'Panamera')
    ]
  ),
  new Make(
    'renault',
    'Renault',
    '/assets/images/makes/Renault.svg',
    [

    ]
  ),
  new Make(
    'rover',
    'Rover',
    '/assets/images/makes/Rover.svg',
    [

    ]
  ),
  new Make(
    'saab',
    'Saab',
    '/assets/images/makes/Saab.svg',
    [

    ]
  ),
  new Make(
    'saturn',
    'Saturn',
    '/assets/images/makes/Saturn.svg',
    [

    ]
  ),
  new Make(
    'seat',
    'Seat',
    '/assets/images/makes/Seat.svg',
    [

    ]
  ),
  new Make(
    'skoda',
    'Skoda',
    '/assets/images/makes/Skoda.svg',
    [

    ]
  ),
  new Make(
    'ssangyong',
    'SsangYong',
    '/assets/images/makes/SsangYong.svg',
    [

    ]
  ),
  new Make(
    'subaru',
    'Subaru',
    '/assets/images/makes/Subaru.svg',
    [
      new Model('brz', 'BRZ'),
      new Model('exiga', 'Exiga'),
      new Model('forester', 'Forester'),
      new Model('impreza', 'Impreza'),
      new Model('legacy', 'Legacy'),
      new Model('outback', 'Outback'),
      new Model('svx', 'SVX'),
      new Model('tribeca', 'Tribeca'),
      new Model('xv', 'XV')
    ]
  ),
  new Make(
    'suzuki',
    'Suzuki',
    '/assets/images/makes/Suzuki.svg',
    [

    ]
  ),
  new Make(
    'Tata',
    'Tata',
    '/assets/images/makes/Tata.svg',
    [

    ]
  ),
  new Make(
    'tesla',
    'Tesla',
    '/assets/images/makes/Tesla.svg',
    [
      new Model('model-3', 'Model 3'),
      new Model('model-s', 'Model S'),
      new Model('model-x', 'Model X'),
      new Model('tesla-roadster', 'Tesla Roadster')
    ]
  ),
  new Make(
    'toyota',
    'Toyota',
    '/assets/images/makes/Toyota.svg',
    [
      new Model('86', '86'),
      new Model('4runner', '4runner'),
      new Model('aurion', 'Aurion'),
      new Model('avalon', 'Avalon'),
      new Model('avalon-hybrid', 'Avalon Hybrid'),
      new Model('avanza', 'Avanza'),
      new Model('avensis', 'Avensis'),
      new Model('c-hr', 'C-HR'),
      new Model('camry', 'Camry'),
      new Model('camry-hybrid', 'Camry Hybrid'),
      new Model('celica', 'Celica'),
      new Model('coaster', 'Coaster'),
      new Model('corolla', 'Corolla'),
      new Model('corona', 'Corona'),
      new Model('cressida', 'Cressida'),
      new Model('crown', 'Crown'),
      new Model('dyna', 'Dyna'),
      new Model('echo', 'Echo'),
      new Model('fj-cruiser', 'FJ Cruiser'),
      new Model('fortuner', 'Fortuner'),
      new Model('hiace', 'Hiace'),
      new Model('highlander', 'Highlander'),
      new Model('highlander-hybrid', 'Highlander Hybrid'),
      new Model('hilux', 'Hilux'),
      new Model('innova', 'Innova'),
      new Model('iq', 'IQ'),
      new Model('land-cruiser', 'Land Cruiser'),
      new Model('land-cruiser-76-series', 'Land Cruiser 76 Series'),
      new Model('mirai', 'Mirai'),
      new Model('prado', 'Prado'),
      new Model('previa', 'Previa'),
      new Model('prius', 'Prius'),
      new Model('prius-c', 'Prius C'),
      new Model('prius-prime', 'Prius Prime'),
      new Model('prius-v', 'Prius V'),
      new Model('rav4', 'Rav4'),
      new Model('rav4-hybrid', 'Rav4 Hybrid'),
      new Model('scion', 'Scion'),
      new Model('sequoia', 'Sequoia'),
      new Model('sienna', 'Sienna'),
      new Model('supra', 'Supra'),
      new Model('tacoma', 'Tacoma'),
      new Model('tercel', 'Tercel'),
      new Model('tundra', 'Tundra'),
      new Model('urban-cruiser', 'Urban Cruiser'),
      new Model('xa', 'XA'),
      new Model('yaris', 'Yaris'),
      new Model('zelas', 'Zelas')
    ]
  ),
  new Make(
    'volks-wagen',
    'Volks-Wagen',
    '/assets/images/makes/Volks-Wagen.svg',
    [
      new Model('amarok', 'Amarok'),
      new Model('beetle', 'Beetle'),
      new Model('bora', 'Bora'),
      new Model('caddy', 'Caddy'),
      new Model('cc', 'CC'),
      new Model('crafter', 'Crafter'),
      new Model('eos', 'Eos'),
      new Model('eurovan', 'Eurovan'),
      new Model('golf', 'Golf'),
      new Model('golf-r', 'Golf R'),
      new Model('golf-sportvan', 'Golf Sportvan'),
      new Model('gti', 'GTI'),
      new Model('jetta', 'Jetta'),
      new Model('jetta-hybrid', 'Jetta Hybrid'),
      new Model('multivan', 'Multivan'),
      new Model('parati', 'Parati'),
      new Model('passat', 'Passat'),
      new Model('passat-hybrid', 'Passat Hybrid'),
      new Model('phaeton', 'Phaeton'),
      new Model('polo', 'Polo'),
      new Model('routan', 'Routan'),
      new Model('scirocco', 'Scirocco'),
      new Model('sharan', 'Sharan'),
      new Model('tiguan', 'Tiguan'),
      new Model('tiguan-hybrid', 'Tiguan Hybrid'),
      new Model('touareg', 'Touareg'),
      new Model('touareg-hybrid', 'Touareg Hybrid'),
      new Model('touran', 'Touran'),
      new Model('transporter', 'Transporter'),
      new Model('up', 'Up'),
      new Model('vento', 'Vento')
    ]
  ),
  new Make(
    'volvo',
    'Volvo',
    '/assets/images/makes/Volvo.svg',
    [
      new Model('240', '240'),
      new Model('242', '242'),
      new Model('260', '260'),
      new Model('460', '460'),
      new Model('740', '740'),
      new Model('760', '760'),
      new Model('850', '850'),
      new Model('940', '940'),
      new Model('960', '960'),
      new Model('c30', 'C30'),
      new Model('c70', 'C70'),
      new Model('s40', 'S40'),
      new Model('s60', 'S60'),
      new Model('s70', 'S70'),
      new Model('s80', 'S80'),
      new Model('s90', 'S90'),
      new Model('v40', 'V40'),
      new Model('v50', 'V50'),
      new Model('v60', 'V60'),
      new Model('v70', 'V70'),
      new Model('v90', 'V90'),
      new Model('v90-cross-country', 'V90 Cross Country'),
      new Model('xc-60', 'XC 60'),
      new Model('xc-70', 'XC 70'),
      new Model('xc-90', 'XC 90'),
      new Model('XC-90-hybrid', 'XC 90 Hybrid')
    ]
  ),
  new Make(
    'changan',
    'Changan',
    '/assets/images/makes/Changan.svg',
    [

    ]
  ),
  new Make(
    'others',
    'Others',
    '/assets/images/makes/Others.svg',
    [
      
    ]
  )
];

export const colors = [
  {name: 'Black', code: '#000000'},
  {name: 'White', code: '#F3F2F2'},
  {name: 'Silver ', code: '#CCCCCC'},
  {name: 'Charcol', code: '#4F4E4E'},
  {name: 'Brown', code: '#71411B'},
  {name: 'Maroon', code: '#740300'},
  {name: 'Red', code: '#C50000'},
  {name: 'Orange', code: '#FA6800'},
  {name: 'Yellow', code: '#FDC200'},
  {name: 'Champagn', code: '#E6B548'},
  {name: 'Lime', code: '#CDDC39'},
  {name: 'Light Green', code: '#8BC34A'},
  {name: 'Green', code: '#4CAF50'},
  {name: 'Olive', code: '#55552E'},
  {name: 'Dark Blue', code: '#000063'},
  {name: 'Blue', code: '#354C9C'},
  {name: 'Baby Blue', code: '#8CD1F5'},
  {name: 'Silver Blue', code: '#E3FFFF'}
];

export const defaultBodyStyle = 'Sedan';
export const bodyStyles = [
  'Bus',
  'Convertible',
  'Coupe',
  'Crossover',
  'Hatchback',
  'Limousine',
  'Mini Van',
  'Pick up',
  'Sedan',
  'Sport',
  'Station',
  'SUV',
  'Truck',
  'Van'
];

export const defaultKilometers = '1 - 9.999';
export const kilometers = [
  '0',
  '1 - 9.999',
  '10.000 - 19.999',
  '20.000 - 29.999',
  '30.000 - 39.999',
  '40.000 - 49.999',
  '50.000 - 59.999',
  '60.000 - 69.999',
  '70.000 - 79.999',
  '80.000 - 89.999',
  '90.000 - 99.999',
  '100.000 - 109.999',
  '110.000 - 119.999',
  '120.000 - 129.999',
  '130.000 - 139.999',
  '140.000 - 149.999',
  '150.000 - 159.999',
  '160.000 - 169.999',
  '170.000 - 179.999',
  '180.000 - 189.999',
  '190.000 - 199.999',
  '200,000+',
  'Unkown'
];

export const defaultOrigin = 'America';
export const origins = [
  'Gulf',
  'America',
  'Europe',
  'Japan',
  'Korea',
  'Unkown'
];

export const defaultCondition = 'Used';
export const conditions = [
  'New',
  'Used'
];

export const defaultEngineType = 'Gasoline';
export const engineTypes = [
  'Gasoline',
  'Diesel',
  'Hybrid',
  'Electric',
  'Plug-in Hybrid'
];

export const defaultCylender = '4';
export const cylenders = [
  '3',
  '4',
  '5',
  '6',
  '8',
  '10',
  '12',
  'Unkown'
];

export const defaultTransmission = 'Automatic';
export const transmissions = [
  'Automatic',
  'Manual'
];
export const defaultDriveType = 'Front 2WD';
export const driveTypes = [
  'Front 2WD',
  'Rear 2WD',
  '4WD',
  'AWD',
  '4X4',
  'Unkown'
];

export const defaultCountry = 'Jordan';
export const defaultCity = 'Amman';
export const cities = [
  'Ajloun',
  'Al-Karak',
  'Al-Mafraq',
  'Al-Tafilah',
  'Al-Zarqa',
  'Amman',
  'Aqaba',
  'Balqa',
  'Irbid',
  'Jerash',
  "Ma'an",
  'Madaba',
];

export const masks = {
  phone: ['+', '9', '6', '2', ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/],
  curreny: ['J', 'O', 'D', ' ', /\d/, /\d/, /\d/, ',', /\d/, /\d/, /\d/, ',', /\d/, /\d/, /\d/]
}

export const technologyOptions = [
  { title: '360 Camera', value: false, disabled: true},
  { title: 'Auto Pilot', value: false, disabled: true},
  { title: 'Auto Light System', value: false, disabled: true},
  { title: 'Auto Park', value: false, disabled: true},
  { title: 'Blind Sopt Detector', value: false, disabled: true},
  { title: 'Bluetooth', value: false, disabled: true},
  { title: 'Cruise Control', value: false, disabled: true},
  { title: 'Day Light System', value: false, disabled: true},
  { title: 'Economy System', value: false, disabled: true},
  { title: 'Front Camera', value: false, disabled: true},
  { title: 'Keep Lane Assist', value: false, disabled: true},
  { title: 'Keyless Entry', value: false, disabled: true},
  { title: 'Light Control', value: false, disabled: true},
  { title: 'Power Steering', value: false, disabled: true},
  { title: 'Rain Sensor', value: false, disabled: true},
  { title: 'Rear Camera', value: false, disabled: true},
  { title: 'Rear Sensors', value: false, disabled: true},
  { title: 'Remote A/C System', value: false, disabled: true},
  { title: 'Start Engine Button', value: false, disabled: true}
];

export const exteriorOptions = [
  { title: 'Aluminum Rims', value: false, disabled: true},
  { title: 'Central Lock', value: false, disabled: true},
  { title: 'Fog Lights', value: false, disabled: true},
  { title: 'LED Lights', value: false, disabled: true},
  { title: 'Rear Spoiler', value: false, disabled: true},
  { title: 'Steel Rims', value: false, disabled: true},
  { title: 'Zenon Lights', value: false, disabled: true}
];

export const interiorOptions = [
  { title: 'A/C', value: false, disabled: true},
  { title: 'Apple Car play', value: false, disabled: true},
  { title: 'Android Auto', value: false, disabled: true},
  { title: 'AUX', value: false, disabled: true},
  { title: 'CD Changer', value: false, disabled: true},
  { title: 'Center Lock', value: false, disabled: true},
  { title: 'Cooled Seats', value: false, disabled: true},
  { title: 'Electric Window', value: false, disabled: true},
  { title: 'Fabric Seats', value: false, disabled: true},
  { title: 'Headup display', value: false, disabled: true},
  { title: 'Heated Seats', value: false, disabled: true},
  { title: 'Heated Steering', value: false, disabled: true},
  { title: 'Leather Seats', value: false, disabled: true},
  { title: 'Manual Windows', value: false, disabled: true},
  { title: 'Navigation System', value: false, disabled: true},
  { title: 'Panoramic Sunroof', value: false, disabled: true},
  { title: 'Rear A/C', value: false, disabled: true},
  { title: 'Refrigerator', value: false, disabled: true},
  { title: 'Screen', value: false, disabled: true},
  { title: 'Steering Control', value: false, disabled: true},
  { title: 'Sunroof', value: false, disabled: true},
  { title: 'USB', value: false, disabled: true},
  { title: 'Wireles Charging', value: false, disabled: true}
];

export const saftyOptions = [
  { title: 'ABS: Anti-Lock Braking System', value: false, disabled: true},
  { title: 'Airbags', value: false, disabled: true},
  { title: 'Alarm/Anti-Theft System', value: false, disabled: true},
  { title: 'EPS: Electric Power Steering', value: false, disabled: true},
  { title: 'HAC: Hill Assist Control', value: false, disabled: true},
  { title: 'Pre-Crash Safety System', value: false, disabled: true},
  { title: 'TPMS: Tire Pressure Monitoring System', value: false, disabled: true},
  { title: 'Cross Traffic Assist', value: false, disabled: true}
];
