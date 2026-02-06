package com.binaryxiao.cubesolver;

import com.binaryxiao.cubesolver.rubikscube.Solver;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
public class SolverController {
//    @GetMapping("/")
//    public String greeting(){
//        return "index";
//    }
    private final SolverService solverService;

    public SolverController(SolverService solverService) {
        this.solverService = solverService;
    } //Constructor for Spring to inject the service object

    @GetMapping("/greeting")
    public Greeting greeting2(){
        return new Greeting(1, "Hello world");
    }

    @GetMapping("/api/Solve")
    public String solve(String scramble){
        System.out.println(scramble);
        return solverService.computeSolution(scramble); //Talk to service rather than to solver directly for best practice
    }


}
