import { Component, OnInit } from '@angular/core';
import { AdnService } from '../services/adn.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(private _AdnService: AdnService) {

  }
  algo() {
    
  }
respuesta:any;
dna:any = ["GTTATG","AAATGA","CAATTT","CTAAAC","TCTTTG","GGTTCT"];
  hasMutation(dna: any[]) {
    this._AdnService.saveAdn(dna).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  
    for(let i=0; i<dna.length;i++){
      for(let j=0; j<dna[i].length;j++){
        if (dna[i][j] == dna[i][j + 1] && dna[i][j] == dna[i][j + 2] && dna[i][j] == dna[i][j + 3]) { //horizontal (x)
          console.log(this.dna[i][j]);
          return true;
        }
        if (i + 3 < dna.length)
          if (dna[i][j] == dna[i + 1][j] && dna[i][j] == dna[i + 2][j] && dna[i][j] == dna[i + 3][j]) { //vertical (x)
            console.log(this.dna[i][j]);
            return true;
          }
        if (j + 3 < dna.length && i + 3 < dna[i].length) {
          if (dna[i][j] == dna[i + 1][j + 1] && dna[i][j] == dna[i + 2][j + 2] && dna[i][j] == dna[i + 3][j + 3]) { //diagonal (x,y)
            console.log(this.dna[i][j]);
            return true;
          }
        }
        if (j >= 3 && i + 3 < dna.length) {
          if (dna[i][j] == dna[i + 1][j - 1] && dna[i][j] == dna[i + 2][j - 2] && dna[i][j] == dna[i + 3][j - 3]) { //diagonal (x,-y)
            console.log(this.dna[i][j]);
            return true;
          }
        }
        

      }
    }
    return false;
  }

  ngOnInit(){
    this.respuesta =this.hasMutation(this.dna);
  }

}

