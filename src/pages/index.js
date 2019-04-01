import React from "react"
import { Link } from "gatsby"
import Layout from "../layouts/layout"
import Image from "../gatsby-components/image"
import SEO from "../gatsby-components/seo"
import { Button, IconButton, Section } from '../components/Element'
import { Text, Box } from "rebass"
import { Search } from 'styled-icons/feather'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Section flex justifyContent="space-evenly" m={2}>
      <Link to="/page-2/">Go to page 2</Link>
      <Button variant="primary">My Custom Button!</Button>
      <IconButton icon={<Search />} />
    </Section>
    <Box>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id pulvinar mi. Morbi eu ipsum convallis turpis cursus aliquam at vel eros. Pellentesque nisi nisi, pellentesque tristique nisl sit amet, pretium imperdiet felis. Donec dictum, urna et eleifend scelerisque, sapien est ultricies turpis, dapibus rhoncus ante nisl vitae orci. Vestibulum eu auctor sapien, eget suscipit magna. Curabitur commodo lectus eu mollis volutpat. Vestibulum sit amet libero non ligula ornare tristique in vitae tortor. Phasellus eget augue in libero auctor fringilla eu quis metus. Phasellus lacus est, accumsan at porttitor id, venenatis eu dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut consectetur urna tincidunt tellus suscipit, sit amet fringilla urna gravida. Cras et justo mauris. In ut elementum lorem. Donec vitae tincidunt erat. Etiam ultricies ultrices ante, sed tempus mauris fermentum in. Etiam rutrum lorem eget pellentesque faucibus.

        Praesent eu quam et mauris ultricies luctus. Morbi quis lacus aliquet ex tincidunt dictum eu ut turpis. Morbi blandit sit amet dolor quis finibus. Integer eu orci mauris. Ut augue elit, finibus elementum efficitur sit amet, ornare id enim. Cras dictum imperdiet nunc non varius. Maecenas sed libero dui. Donec bibendum interdum purus, sed suscipit orci vulputate ut. Donec consequat accumsan purus, sit amet finibus dui facilisis at.

        In sit amet lacus aliquet, placerat arcu non, congue enim. Cras posuere egestas est eget efficitur. In posuere purus vel elit finibus, ac efficitur risus convallis. Quisque eget facilisis nulla, a malesuada purus. Donec pellentesque feugiat purus, eget egestas tellus ultricies non. Pellentesque id porttitor turpis, sit amet congue urna. Mauris imperdiet ultricies nibh vel fringilla.

        Vivamus magna ipsum, venenatis at accumsan in, placerat et orci. Phasellus feugiat rutrum erat, id congue diam vehicula sit amet. Aliquam accumsan condimentum turpis ac laoreet. Nam arcu mi, gravida a orci et, posuere dictum eros. Nam condimentum nisl a tortor accumsan, vel convallis odio consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi mollis, dui vitae rutrum volutpat, diam nulla vehicula urna, quis aliquet velit erat sit amet velit. Nullam vitae massa sed magna dapibus ornare id eu tortor. Duis vel iaculis risus. Vivamus euismod nisi mauris, eget aliquam orci venenatis in. Nam gravida cursus risus non commodo. Aliquam est lorem, accumsan eu leo non, imperdiet feugiat ligula.

        Donec tristique, massa ut pulvinar congue, magna orci semper enim, vel scelerisque eros est laoreet ligula. Phasellus a ullamcorper nisl, sed feugiat odio. Nam sit amet nulla sed ipsum vehicula malesuada. Donec vulputate, augue vel ultricies tempus, risus leo malesuada ligula, sed elementum enim dui vel odio. In venenatis nibh quis lorem ornare consectetur. Nullam eu accumsan risus. Sed vel dolor interdum, ullamcorper quam sit amet, condimentum nibh. Integer pulvinar finibus maximus. Nunc vel laoreet magna.

        Nullam blandit diam et sodales consequat. Cras dictum vitae erat maximus faucibus. In bibendum quam ligula, non vulputate lorem efficitur a. Ut sodales aliquam enim sit amet lobortis. Fusce eu tincidunt odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis convallis arcu. Pellentesque ultrices pellentesque leo, vel blandit lacus tristique id. Aliquam facilisis pharetra metus, accumsan ullamcorper augue aliquet sed.

        Aenean mi lectus, varius rutrum pellentesque sed, pulvinar id est. Cras varius ligula vitae tincidunt blandit. Integer in rutrum mauris. Cras dapibus lobortis cursus. Nulla facilisi. Phasellus ultricies, leo a rutrum aliquet, urna ligula vestibulum elit, vel tempus quam urna et mauris. Mauris vitae ante ullamcorper ipsum suscipit varius. Phasellus ullamcorper rutrum neque, vel posuere lacus.

        Duis aliquam, tellus non pulvinar elementum, dolor arcu placerat augue, eu laoreet mi orci id nisi. Etiam est dui, volutpat ac dapibus in, viverra quis enim. Vivamus tempus nibh id pharetra vehicula. Vivamus molestie fermentum dictum. Phasellus a euismod nunc, nec venenatis augue. Sed semper massa ac elementum imperdiet. Quisque sed ante dapibus, facilisis elit ac, vestibulum lacus. Phasellus gravida nunc at sapien pellentesque, et sodales neque feugiat. Mauris ut rutrum velit. Nullam laoreet ex vitae diam ultricies, id venenatis arcu suscipit. Mauris a odio interdum, viverra tortor dapibus, luctus ante. Aenean gravida lectus eu viverra aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique lacinia finibus. Duis a justo eget libero malesuada sodales.

        Maecenas eu ornare massa. Vestibulum sagittis, turpis et molestie imperdiet, metus erat sollicitudin massa, ut dictum enim metus a ante. Suspendisse tempor sem vitae metus elementum, ut placerat dui lobortis. Sed sollicitudin, lorem a placerat luctus, ipsum nisl tincidunt lectus, posuere volutpat lectus metus varius turpis. Morbi tempus fermentum felis, at elementum dui. Integer quis massa justo. Nulla facilisi. Aliquam erat volutpat. In ac erat et purus feugiat pulvinar.

        Integer dapibus dui sodales lobortis imperdiet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam nec finibus dui. Phasellus sollicitudin lectus vel tortor iaculis egestas. Quisque nec est ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut sem quam, porttitor consectetur mattis sed, tincidunt quis nunc. Mauris maximus nulla eu ex luctus, ac ultrices urna pharetra.

        Pellentesque blandit a neque vel rhoncus. Ut aliquam erat magna, non pulvinar turpis gravida at. Aliquam bibendum dui eu mi ornare, vel commodo metus lacinia. Donec eleifend sem dolor, a fermentum leo suscipit vitae. Ut porttitor justo ac molestie bibendum. Duis metus urna, efficitur in viverra sit amet, mattis vestibulum mauris. Sed tincidunt lobortis tellus eget euismod. Pellentesque sed quam eget leo commodo dictum.

        Morbi sapien lectus, efficitur ac consequat quis, dignissim quis lorem. Fusce justo eros, blandit vel iaculis vel, blandit sit amet neque. Donec ex magna, pulvinar at venenatis et, ultrices vel nisi. Sed quis lorem non est luctus fermentum. Vivamus dictum elit non pulvinar auctor. Etiam maximus fringilla ipsum feugiat vestibulum. Duis mi lorem, finibus eu nisl a, aliquet sollicitudin ex.

        Fusce a ultrices metus, quis interdum ex. Mauris dapibus semper magna, ac consectetur dolor porta sed. In augue arcu, venenatis ut turpis iaculis, viverra fermentum est. In quis vulputate magna. Nam cursus elit vitae magna mattis blandit ac nec sapien. Fusce et risus tempus, accumsan sem et, lobortis tellus. Cras non ex nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi ante dui, elementum vitae tincidunt in, facilisis sed orci. Proin hendrerit in turpis vitae gravida. Praesent tincidunt dui a maximus tincidunt. Pellentesque sed nunc eget dui gravida venenatis eget at leo. Praesent blandit eget velit mattis mattis. Nulla facilisi. Duis eu bibendum sapien.

        Morbi laoreet, libero ut bibendum efficitur, tellus ex posuere nunc, eget semper felis ex sed arcu. Nulla malesuada cursus arcu tristique ultricies. Donec condimentum, ex vitae hendrerit laoreet, augue est imperdiet velit, ac convallis tortor mauris non ante. Morbi et libero vulputate, pellentesque metus non, tristique lacus. Pellentesque quis gravida nulla. Donec faucibus dictum velit ut placerat. Vivamus maximus consequat dui, a aliquam massa tempus suscipit. Sed vulputate blandit feugiat. Aenean posuere tortor augue, at mattis enim ultricies eget.

        Curabitur blandit ornare neque, non cursus velit dictum bibendum. Nulla nisl orci, ullamcorper sed bibendum at, mattis ac ipsum. Mauris ullamcorper, ex a tempor pretium, libero nisi luctus tellus, euismod rhoncus orci ipsum a libero. Donec eget eros vitae leo rhoncus fringilla. Suspendisse potenti. Quisque bibendum efficitur sapien id luctus. Praesent sagittis nisi in sagittis consectetur. Nam justo diam, maximus id magna in, suscipit ornare elit. Integer vulputate sollicitudin eros, nec varius mi condimentum vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut sed viverra ex, vel hendrerit arcu.

        Donec mattis pulvinar mauris vel mattis. Nullam condimentum nisi ac metus imperdiet, eget dapibus nulla pharetra. Mauris vulputate libero at consequat fringilla. Donec sagittis nulla id sapien gravida, quis iaculis augue tincidunt. Quisque in laoreet purus. Integer dapibus tortor et lacus luctus, in suscipit nisi pulvinar. Duis neque justo, hendrerit vel viverra ac, dignissim convallis felis. Integer in pharetra magna, ut porta sem. Nulla eget odio condimentum, gravida nisl sit amet, tempor arcu. Etiam sit amet neque id turpis varius lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi.

        Aenean consectetur odio non elit tempor interdum. Morbi bibendum nisi eu ipsum blandit, ac accumsan leo placerat. Donec non sapien eget felis sagittis mollis. Fusce molestie et nulla ac facilisis. Vestibulum ornare nec nulla in tincidunt. Fusce efficitur lectus a ex vehicula, vel tempor neque suscipit. Cras eget sollicitudin purus. Etiam pellentesque metus id enim semper, id tempus tortor scelerisque.

        Duis porta congue lobortis. Duis dignissim tincidunt sapien, vel sollicitudin tortor interdum non. Ut lobortis justo sed bibendum malesuada. Sed id urna cursus, molestie mi nec, vehicula augue. In eget consectetur ligula. Suspendisse bibendum lectus sodales orci pretium ullamcorper. Phasellus et ullamcorper sem, vitae sodales ex. Praesent posuere venenatis sollicitudin. Morbi a ipsum suscipit, maximus erat ac, accumsan odio. Praesent lobortis dictum lacus id fringilla. Vivamus venenatis mauris quam, vitae hendrerit nisi tempus a. Nam ullamcorper consequat sem id pulvinar. Pellentesque accumsan enim ligula, sed malesuada nibh tempor egestas. Aenean pellentesque, est sed sagittis tristique, ante tellus lobortis sapien, eu lobortis purus nunc eget turpis.

        In hac habitasse platea dictumst. Quisque elementum ante vel turpis mollis blandit. Donec fermentum urna sit amet condimentum auctor. Pellentesque id mi quam. Ut condimentum orci justo. Phasellus volutpat malesuada dolor, vitae pulvinar justo eleifend a. Maecenas commodo dui ac scelerisque laoreet. Donec varius in augue quis rutrum. Proin vel felis sit amet mi bibendum sodales. Integer eget elit urna. Phasellus volutpat eros ut erat maximus, a tincidunt ligula egestas. Fusce nisi tellus, faucibus at tellus id, iaculis congue sapien. Maecenas sit amet lectus sed justo ornare efficitur. Pellentesque scelerisque libero at massa scelerisque, vulputate bibendum purus cursus.

        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam fermentum ante non nunc ultricies lobortis. Quisque efficitur mi convallis molestie consectetur. Cras quis fringilla diam. In non orci justo. Phasellus dignissim, nibh vel euismod convallis, leo odio volutpat arcu, vel facilisis nunc ipsum in tortor. Nunc sit amet ullamcorper urna. Aliquam efficitur consequat viverra. Vivamus sed lorem at dui tincidunt ultrices. Duis semper lacus odio, ac congue enim rhoncus a. Fusce at risus vehicula, posuere risus in, luctus ante. Etiam dolor risus, sodales in accumsan a, sagittis id diam. Aliquam erat volutpat.
      </Text>
      </Box>
  </Layout>
)

export default IndexPage
