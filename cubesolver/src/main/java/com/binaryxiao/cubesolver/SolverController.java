package com.binaryxiao.cubesolver;

import com.binaryxiao.cubesolver.rubikscube.Solver;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SolverController {
//    @GetMapping("/")
//    public String greeting(){
//        return "index";
//    }

    @GetMapping("/greeting")
    public Greeting greeting2(){
        return new Greeting(1, "Hello world");
    }

    @GetMapping("/api/Solve")
    public String solve(String scramble){
        System.out.println(scramble);
        return Solver.solve3(scramble);
    }


}
