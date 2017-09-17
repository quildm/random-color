import { Component } from '@angular/core';
@Component({ 
	selector: 'app-root', 
	templateUrl: './app.component.html', 
	styleUrls: ['./app.component.css']
})
export class AppComponent  {
    title = 'app works!';

    //set a property that holds a random color for our style.
	randomcolor = this.getRandomColor();
	number = this.randomcolor;

    //function to get random colors
    public getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++){
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    //function to set a new random color
    setColor() {
        this.randomcolor = this.getRandomColor();
    }
}


