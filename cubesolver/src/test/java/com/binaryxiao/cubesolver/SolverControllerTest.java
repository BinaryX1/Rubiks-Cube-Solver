package com.binaryxiao.cubesolver;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.webmvc.test.autoconfigure.WebMvcTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(SolverController.class)
public class SolverControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private SolverService fakeService;

    @Test
    void testSolveEndpoint() throws Exception{
        String cube = "samplecube";
        String expectedSolution = "Solver called";

        when(fakeService.computeSolution(cube)).thenReturn(expectedSolution);

        mockMvc.perform(get("/api/Solve").param("scramble", cube))
                .andExpect(status().isOk())
                .andExpect(content().string(expectedSolution));
    }
}
