import React from 'react';
import {StyleSheet, View, WebView} from 'react-native';

let BGWASH = 'rgba(255,255,255,0.8)';

let body = `
  <p>This genus is in great need of a thorough study across its entire range. There have been 46 properly described species over the years. This number was 27 at the time of one of the most recent monographs on Acrocomia (in 1941)—the best source even though the author indicated that it was a preliminary study, not a thorough investigation (Gentes Herbarum 39. Acrocomia—Preliminary Paper by L. H. Bailey). The number subsequently swelled to about 35 species until 1995, in their brief summery of all palms of the new world (Field Guide to the Palms of the Americas) A. Henderson et al. reduced Acrocomia to two species. All but three were lumped into A. aculeata. Since then A. media showed up on the accepted lists (because of Bee Gunn's DNA work or because P. Acevedo-Rodríguez and M. T. Strong accepted it?). Around this same time Gastrococos crispa was renamed as Acrocomia crispa, bringing the number up to four species. Finally, in 2010 H. Lorenzi, L. R. Noblick, F. Kahn, and E. Ferreira made a thorough investigation of the palms of Brazil and included eight Acrocomia by resurrecting two (A. intumescens and A. totai) and introducing two new small ones (A. glaucescens and A. emensis). We can only assume that if that study was not limited to Brazil, but included the entire range of Acrocomia, then the current number would have been much higher. Even going back to old descriptions of the species does not clarify things, because many of the descriptions of the same species give contrary characteristics and the original descriptions are quite vague.</p><br><p><strong>Trunk:</strong> Single, with no crownshafts.</p><p><strong>Leaves:</strong> Pinnate, form globose crowns; have irregularly arranged leaflets that spread in different planes along the rachis—most look plumose. The leaves tend to be fairly straight, only slightly curved and the tightly spaced, thin leaflets are somewhat curved as they hang down. The rachis has a ridge along the top side, which is narrow at the tip and gets wider towards the trunk.</p><p>Vicious spines protect the whole plant, rachis, petioles and trunk. All Acrocomia seem to have more spines on their various parts when they are younger than when they become large trees.</p><p><strong>Reproduction:</strong> Monoecious. The inflorescence grows from among the leaves and are shorter than the leaves. It first emerges within a double spathe, consisting of a firm, stiff, persistent 'main' bract and a thin flimsy bract that quickly hangs down and then falls off. Each inflorescence has male flowers at the tip end of each stem, and female flowers at the base of the stem. This genus is in the same tribe as Cocos, and in the same sub-tribe as Aiphanes and Astrocaryum. Like all in this tribe, it has the small coconut looking seeds with three spots at the top and a hard shell. The fruits are usually round or slightly swat with a pointed nub at the bottom. The seeds are slow to germinate, taking sometimes a year or up to three years. These are tillering palms, they exhibit saxophone style root growth (have a heel), keep the top third of the heel above ground.</p><br><p><strong>Cultural Information:</strong></p><p>Acrocomia are generally from impoverished soils, but they easily adapt to various soils and pH, even highly alkaline soil. Most handle wind well, are moderately salt tolerant and can be transplanted without much set back to the plant, but beware of the spines.</p><p>Cold-hardiness varies greatly within each species, depending on the location where the seeds were originally gathered in habitat. That is why a range of temperatures is given. The lowest temperature is how low plants with that nave have been known to survive, but they are likely to be damaged by extended periods of such cold, or could die especially if your plant is from a seed batch taken from a warmer climate, or if very young, just planted or not healthy. The higher temperature gives the safer number, so if you do not want to take any chances, go by that number. The cultural data on these species are mostly based on experiences with these palms in California. Exact temperature and water tolerances, as well as speed of growth were based on the names these palm's seeds had when they came into California. If a large batch was mislabeled, then that will skew the data.</p>
`;

export default function DropDownPage() {
  return (
    <View style={styles.container}>
      <WebView
        style={{
          backgroundColor: BGWASH
        }}
        source={{html: body}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  returnView: {
    height: 35
  }
});
