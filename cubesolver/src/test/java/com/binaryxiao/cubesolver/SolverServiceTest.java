package com.binaryxiao.cubesolver;
import com.binaryxiao.cubesolver.rubikscube.Solver;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

//Solving service unit tests (communicates with solver engine and the controllers)
@ExtendWith(MockitoExtension.class)
public class SolverServiceTest {
    @Mock
    Solver fakeSolver;

    @InjectMocks SolverService solverService;

    @Test
    void testService(){
        String cube = "samplecube";
        String expectedSolution = "Solver called";
        when(fakeSolver.solve3(cube)).thenReturn(expectedSolution);
        assertEquals(expectedSolution, solverService.computeSolution(cube));
        //Proves that the solver was called by the service without needing to run the engine itself
    }
}
