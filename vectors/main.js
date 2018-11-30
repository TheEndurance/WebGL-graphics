window.onload = function () {
    class Vector {
        constructor(x,y){
            this.x = x;
            this.y = y;
        }
        setAngle(angle){
            const length = this.getLength();
            this.x = Math.cos(angle) * length;
            this.y = Math.sin(angle) * length;
        }
        getLength(){
            return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2));
        }
        getAngle(){
            return Math.atan2(this.y,this.x);
        }
    }
    
}