<div align="center">
<p align="center"><img src="assets/app_icon.png" width="150"></p> 
<h2 align="center"><b>LibreHealth Cost Of Care Web App</b></h2>
<h4 align="center">Compare Costs Of Medical Procedures Of US Hospitals.</h4>
<h4 align="center">This project is running at https://librehealth-cost-of-care.web.app and https://cost-of-care.web.app </h4>
</div>

## Goal

Recent changes in Medicare’s payment policies under the inpatient prospective payment system (PPS) and the long-term care hospital PPS required that the CDM be made available in a machine-readable format by January 1, 2019 . These formats are in XML or CSV and while machine readable do not make sense for a patient who is comparing the prices

The Goal of this LibreHealth Cost Of Care Explorer Project is to provide patient friendly costs of care, to help patients get better cost estimates for medical procedures of US Hospitals. User can view the chargemaster, search for a particular procedure in multiple hospitals chargemasters & can sort data by Category or sort by price in ascending or descending order.

## Communication

The LibreHealth Cost Of Care Explorer chat channel is on [Librehealth Forums.](https://forums.librehealth.io/)

## Screenshots

|  Web | Mobile | 
| ------ | ------ | 
| <img src="/assets/web/home.png" align="top">| <img src="/assets/mobile/home.png" align="top"> | 
| <img src="/assets/web/select_hospital.png" align="top">| <img src="/assets/mobile/select_hospital.png" align="top"> | 
| <img src="/assets/web/view_chargemaster.png" align="top">| <img src="/assets/mobile/view_chargemaster.png" align="top"> |  
| <img src="/assets/web/select_hospital.png" align="top">| <img src="/assets/mobile/select_hospital.png" align="top"> |
| <img src="/assets/web/compare.png" align="top">| <img src="/assets/mobile/compare.png" align="top"> |
| <img src="/assets/web/about.png" align="top">| <img src="/assets/mobile/about.png" align="top"> |
| <img src="/assets/web/inpatient.png" align="top">| <img src="/assets/mobile/inpatient.png" align="top"> |


## Branch Policy

We have the following branches

- **development** All development goes on in this branch. If you're contributing, you are supposed to make a merge request to development. PRs to development branch must pass a build check and a unit-test check on Gitlab pipeline.

- **master** This contains shipped code. After significant features/bugfixes are accumulated on development, we make a version update and make a release.

## Maintainers and Developers

- [**Mua N. Laurent**](https://gitlab.com/muarachmann)

- [**Darshpreet Singh**](https://gitlab.com/Darshpreet2000)

- [**Judy Gichoya**](https://gitlab.com/judywawira)

- [**Saptarshi Purkayastha**](https://gitlab.com/sunbiz)

- [**Robby O Connor**](https://gitlab.com/robbyoconnor)

## Contributions Best Practices

Please help us follow the best practice to make it easy for the reviewer as well as the contributor. We want to focus on the code quality more than on managing pull request ethics.

- Single commit per pull request
- Reference the issue numbers in the commit message. Follow the pattern ` Fixes #<issue number> <commit message>`
- Follow uniform design practices. The design language must be consistent throughout the app.
- The pull request will not get merged until and unless the commits are squashed. In case there are multiple commits on the PR, the commit author needs to squash them and not the maintainers cherrypicking and merging squashes.
- If the PR is related to any front end change, please attach relevant screenshots in the pull request description.
- Before you join development, please set up the project on your local machine, run it and go through the application completely. Press on any button you can find and see where it leads to. Explore.
- If you would like to work on an issue, drop in a comment at the issue. If it is already assigned to someone, but there is no sign of any work being done, please free to start working on it.

## License

This project is licensed under the Mozilla Public License 2.0 with Healthcare Disclaimer. a copy of this license can be found in `LICENSE`.
