# n-gage bootstrapping logic
node_modules/@financial-times/n-gage/index.mk:
	npm install --no-save --no-package-lock @financial-times/n-gage
	touch $@

-include node_modules/@financial-times/n-gage/index.mk

# remove verify lintspaces as it is covered by prettier
verify: ci-n-ui-check _verify_eslint _verify_stylelint _verify_pa11y_testable
	@$(DONE)

unit-test:
	@yarn test