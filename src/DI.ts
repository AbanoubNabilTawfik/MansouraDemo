class Tiers
{
    tiersType:any;
    constructor(tiersType:any)
    {
     this.tiersType=tiersType;
    }
}

class Engine 
{
    constructor()
    {

    }
}

class car
{
    engine:any;
    tiers:any;
    constructor(engines:any,tiers:any)
    {
    //  this.engine=new Engine();
    //  this.tiers=new Tiers();
    this.engine=engines;
    this.tiers=tiers;
    }
}