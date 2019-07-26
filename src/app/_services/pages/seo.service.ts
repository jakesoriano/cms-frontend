import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    private meta: Meta,
    private title: Title
  ) {
    // meta.addTag({name: 'description', content: 'Test'})
   }
   addMetaTags(data) {
    let meta = []
    let obj = {}
    for(let key in data) {
      if(data[key] !== null) {
        if(key.indexOf('og:') > -1) {
          obj = {property: key, content: data[key]}
        } else {
          if(key !== 'title' && key !== 'meta_description') {
            obj = {name: key, content: data[key]}
          }
        }
        meta.push(obj)
      }
    }
    this.meta.addTags(meta)
  }
  setMetaTags(data) {
    this.title.setTitle(data['title'])
    let obj = {}
    for(let key in data) {
      if(data[key] !== null) {
        // Facebook OG
        if(key.indexOf('og:') > -1) {
          let meta = this.meta.getTag('property = "'+key+'"')
          let metas = []
          if(meta === null) {  // If meta not found, add 
            obj = {property: key, content: data[key]}
            metas.push(obj)
            this.meta.addTags(metas)
          } else { // Update if found
            this.meta.updateTag({property: key, content: data[key]})
          }
        } else {
          if(key !== 'title' && key !== 'meta_description') {
            let meta = this.meta.getTag('name = "'+key+'"')
            let metas = []
            // Meta Tags
            if(meta === null) { // If meta not found, add meta
              obj = {name: key, content: data[key]}
              metas.push(obj)
              this.meta.addTags(metas)
            } else { // Update if found
              this.meta.updateTag({name: key, content: data[key]})
            }
          }
        }
      }
    }
} 

}
