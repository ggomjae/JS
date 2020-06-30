let inf = 987654321

let bfs = (graph, root) => {
    let nL = {};
  
    for(let i = 0; i < graph.length; ++i){
        nL[i] = inf; 
    }

    nL[root] = 0; 
  
    let queue = [root] 
    let current; 
  
    while(queue.length != 0){
      current  = queue.shift()
  
      let curConnected = graph[current] 
      let nIdx = []
      let idx = curConnected.indexOf(1) 
  
      while(idx != -1){
        nIdx.push(idx) 
        idx = curConnected.indexOf(1, idx + 1) 
      }
  
      
      for ( let j = 0; j < nIdx.length; j++){
        if (nL[nIdx[j]] == inf){ 
          nL[nIdx[j]] = nL[current] + 1
          queue.push(nIdx[j]) 
        }
      }
    }
  
    return nL
  }
  
  let graph = [
    [0,1,1,1,0],
    [0,0,1,0,0],
    [1,1,0,0,0],
    [0,0,0,1,0],
    [0,1,0,0,0]
  ]
  
  bfs(graph, 1)