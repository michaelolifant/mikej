var descriptor = {
    blocks: [
        ['w', 'turn motor on for %n secs',             'motorOnFor', 1],
        [' ', 'turn motor on',                         'allMotorsOn'],
        [' ', 'turn motor off',                        'allMotorsOff'],
        [' ', 'set motor power %n',                    'startMotorPower', 100],
        [' ', 'set motor direction %m.motorDirection', 'setMotorDirection', 'this way'],
        ['h', 'when distance %m.lessMore %n',          'whenDistance', '<', 20],
        ['h', 'when tilt %m.eNe %n',                   'whenTilt', '=', 1],
        ['r', 'distance',                              'getDistance'],
        ['r', 'tilt',                                  'getTilt']
    ],
    menus: {
        motorDirection: ['this way', 'that way', 'reverse'],
        lessMore: ['<', '>'],
        eNe: ['=','not =']
    },
    url: 'http://info.scratch.mit.edu/WeDo'
};
