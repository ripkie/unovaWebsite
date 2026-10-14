$projectRoot = $PSScriptRoot
if (-not (Test-Path (Join-Path $projectRoot "package.json"))) { throw "Place this script in the project root." }
$legacyFiles = @(
 "src/components/contents/products/ProductCarouselSection.tsx",
 "src/components/contents/products/ComingSoonSection.tsx",
 "src/lib/hooks/useProductsState.ts",
 "src/components/contents/productDetail/UseCasesSection.tsx"
)
foreach ($relativePath in $legacyFiles) {
 $legacyPath = Join-Path $projectRoot $relativePath
 if (Test-Path -LiteralPath $legacyPath -PathType Leaf) { Remove-Item -LiteralPath $legacyPath -Force; Write-Host "Removed: $relativePath" }
}
