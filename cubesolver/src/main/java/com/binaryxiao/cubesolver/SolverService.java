package com.binaryxiao.cubesolver;
import com.binaryxiao.cubesolver.rubikscube.Solver;
import org.springframework.stereotype.Service;

@Service
public class SolverService {

    private final Solver solver;

    public SolverService(Solver solver){
        this.solver = solver;
    }

    public String computeSolution(String cube){

        //Could add database saving here
        System.out.println("Solve requested for cube: " + cube);
        return solver.solve3(cube);
    }
}
