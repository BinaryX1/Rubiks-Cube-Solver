package com.binaryxiao.cubesolver;

import com.binaryxiao.cubesolver.rubikscube.Solver;
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

    @GetMapping("/Solve")
    public String solve(){
        return Solver.solve3("OOOGOBOOOGOGWWWBOBYYYYGWGWBWBYBYGGRGWWWBRBYYYRRRGRBRRR");
    }
}
