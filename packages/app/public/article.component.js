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
var ArticleComponent = (function () {
    function ArticleComponent() {
        this.title = 'Angular 2 testing';
        this.link = 'http://angular.io';
        this.votes = 10;
    }
    ArticleComponent.prototype.voteUp = function () {
        this.votes += 1;
    };
    ArticleComponent.prototype.voteDown = function () {
        this.votes -= 1;
    };
    ArticleComponent = __decorate([
        core_1.Component({
            selector: 'Article',
            host: {
                class: 'row'
            },
            template: "\n\t\t<div class=\"four wide column center aligned votes\">\n\t      <div class=\"ui statistic\">\n\t        <div class=\"value\">\n\t          {{ votes }}\n\t        </div>\n\t        <div class=\"label\">\n\t          Points\n\t        </div>\n\t      </div>\n\t    </div>\n\t    <div class=\"twelve wide column\">\n\t      <a class=\"ui large header\" href=\"{{ link }}\">\n\t        {{ title }}\n\t      </a>\n\t      <div class=\"meta\"></div>\n\t      <ul class=\"ui big horizontal list voters\">\n\t        <li class=\"item\">\n\t          <a href (click)=\"voteUp()\">\n\t            <i class=\"arrow up icon\"></i>\n\t              upvote\n\t            </a>\n\t        </li>\n\t        <li class=\"item\">\n\t          <a href (click)=\"voteDown()\">\n\t            <i class=\"arrow down icon\"></i>\n\t            downvote\n\t          </a>\n\t        </li>\n\t      </ul>\n\t    </div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], ArticleComponent);
    return ArticleComponent;
}());
exports.ArticleComponent = ArticleComponent;
//# sourceMappingURL=article.component.js.map