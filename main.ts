motors.mediumA.setBrake(true)
motors.mediumA.run(10, 600, MoveUnit.MilliSeconds)
motors.largeBC.steer(-13, 40, 1700, MoveUnit.Degrees)
motors.stopAll()
motors.largeBC.steer(-5, 100, -2020, MoveUnit.Degrees)
brick.exitProgram()
