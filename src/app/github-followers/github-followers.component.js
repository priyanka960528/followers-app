var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from './github-followers.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
var GithubFollowersComponent = (function () {
    function GithubFollowersComponent(route, service) {
        this.route = route;
        this.service = service;
    }
    GithubFollowersComponent.prototype.ngOnInit = function () {
        var _this = this;
        Observable.combineLatest([
            this.route.paramMap,
            this.route.queryParamMap
        ])
            .switchMap(function (combined) {
            var id = combined[0].get('id');
            var page = combined[1].get('page');
            return _this.service.getFollowers();
        })
            .subscribe(function (followers) { return _this.followers = followers; });
    };
    return GithubFollowersComponent;
}());
GithubFollowersComponent = __decorate([
    Component({
        selector: 'github-followers',
        templateUrl: './github-followers.component.html',
        styleUrls: ['./github-followers.component.css']
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        GithubFollowersService])
], GithubFollowersComponent);
export { GithubFollowersComponent };
//# sourceMappingURL=github-followers.component.js.map