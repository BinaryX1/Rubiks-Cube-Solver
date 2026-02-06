package com.binaryxiao.cubesolver;
import com.binaryxiao.cubesolver.rubikscube.RubiksCube;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

//Core solving logic unit tests
public class CubeTest {
    @Test
    void newCubeShouldBeSolved(){
        RubiksCube mycube = new RubiksCube();
        boolean solvedStatus = mycube.isSolved();
        assertTrue(solvedStatus, "A new cube constructed with no arguments should be solved.");
    }

    @Test
    void rotatingCubeShouldChangeCube(){
        RubiksCube myCube = new RubiksCube();
        myCube.applyMoves("URF");
        assertFalse(myCube.isSolved(), "Rotating the cube should change the cube state.");
    }
}
