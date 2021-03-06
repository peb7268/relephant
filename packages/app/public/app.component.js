"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var article_component_1 = require('./article.component');
var article_component_2 = require('./article.component');
var AppComponent = (function () {
    function AppComponent() {
        this.articles = [
            new article_component_1.Article('Angular 2', 'http://angular.io', 3),
            new article_component_1.Article('Fullstack', 'http://fullstack.io', 2),
            new article_component_1.Article('Angular Homepage', 'http://angular.io', 1),
        ];
    }
    AppComponent.prototype.addArticle = function (title, link) {
        //console.log(`Adding article title: ${title.value} and link: ${link.value}`);
        this.articles.push(new article_component_1.Article(title.value, link.value, 0));
        title.value = '';
        link.value = '';
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'App',
            directives: [article_component_2.ArticleComponent],
            template: "\n\t<form class = \"ui large form segment\">\n\t\t<h3 class=\"ui header\">Add a Link</h3>\n\t\t<div class = \"field\" >\n\t\t\t<label for= \"title\">Title : </label >\n\t\t\t<input name= \"title\" #title>\n\t\t</div>\n\n\t\t<div class=\"field\">\n\t\t\t<label for=\"link\">Link :</label>\n\t\t\t<input name=\"link\" #link>\n\t\t</div>\n\n\t\t<button (click)=\"addArticle(title, link)\" class=\"ui positive right floated button\">\n\t\t\tSubmit link\n\t\t</button>\n\t</form>\n\n\t<div class=\"ui grid posts\">\n\t\t<Article *ngFor=\"let article of articles\" [article]=\"article\"></Article>\n\t</div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map