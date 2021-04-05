import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

type Item = {
  name: String,
  quantity: number
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  title = "Grocery List"

  items: Array <any> = []
  constructor(public toastController: ToastController, public alertController: AlertController) {
      this.items = [
      {
        name: "Apple",
        quantity: 2
      },
      {
        name: "Sugar",
        quantity: 2
      },    
      {
        name: "Chicken",
        quantity: 2
      },    
      {
        name: "Bread",
        quantity: 2
      },    
      {
        name: "Milk",
        quantity: 2
      }
    ]
  }

  async addQuantity(item:any, index:number){
    if(this.items[index].quantity > 50){
      const toast = await this.toastController.create({
        message: item.name + ' has reached max quantity',
        duration: 2000
      });
      toast.present();
      }

      this.items[index].quantity += 1
      const toast = await this.toastController.create({
        message: item.name + ' quantity is ' +  this.items[index].quantity,
        duration: 2000
      });
      toast.present();
  }

  async removeItem(item:any, index:number){
    if(this.items[index].quantity === 1){
    const toast = await this.toastController.create({
      message: item.name + ' has been removed.',
      duration: 2000
    });
    toast.present();
    this.items.splice(index,1)
    }
    else{
      this.items[index].quantity -= 1
    }
  }

  async addAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Add Item',
      subHeader: 'New Item',
      message: 'Add a Shopping Item.',
      inputs:[{
        name:'Item',
        placeholder:"add Item"
      }],
      buttons:[
        {
        text:"Cancel",
          handler: async () =>{
            const toast = await this.toastController.create({
              message: 'Cancelled',
              duration: 2000
            });
            toast.present();
          }
        },
        {
          text:"Add",
            handler: async (newItem) =>{
              let obj ={
                name:newItem.Item,
                quantity:1
              }
              this.items.unshift(obj)
              const toast = await this.toastController.create({
                message: obj.name + ' has been added.',
                duration: 2000
              });
              toast.present();
            }
        }
      ]

    });

    await alert.present();
  }
}
